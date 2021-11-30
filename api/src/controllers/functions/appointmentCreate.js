const Appointment = require ('../../models/Appointment');
const Schedule = require ('../../models/Schedule');

module.exports = (response,ML) => {
  let customerId = response[0].customerId;
  let allProfs = {};
  for(let j=1 ; j<response.length ; j++) {
    allProfs[response[j].professionalId] = [];
  }
  let allData = [];
  for (let i=0; i<response[0].schedules.length;i++){
    allData.push(Schedule.findById(response[0].schedules[i])
      .populate('userId','name lastname'));
    //fullDate (r.date),profName p/descrip(r.userId.name,r.userId.lastname,profId(r.userId._id)
  }
  return Promise.all(allData)     //array of schedules with info
    .then(allDataResult => {
      allDataResult.forEach(e => {
        allProfs[e.userId._id].push({date: e.date, description: `Cita con ${e.userId.name} ${e.userId.lastname}`,id:e._id})
      });
      return allProfs;})    //{profId1:[{date,description,id},{date,description,id}],profId2:[{d,d,i},{d,d,i}]}
    .then( result => {
      let allAppointments = [];
      let auxArray = [];
      for (let prof in result){       //evaluate each Prof
        result[prof].sort((a,b)=>a.date.shortcut-b.date.shortcut);                         //OK order dates
        let description = result[prof][0].description;            //description for all app of each prof
        let m = result[prof].map((el,ind)=>{
            let day = result[prof][ind].date.shortcut.toString().slice(0,8);  //day as YYYYMMDD
            return {
              [day]: {
                meetingLink: ML[result[prof][ind].id],
                date: {
                  shortcut: result[prof][ind].date.shortcut,
                  datefull: result[prof][ind].date.datefull
                }
              }
            }
          });

        auxArray = m.reduce((acc,ele,ind)=>{
          let prop = Object.keys(m[ind])[0];
          acc[prop]?
            acc[prop].push(ele[prop]):
            acc[prop]=[ele[prop]];
          return acc;
        },{});        //accumulate schedules/day

        for(let day in auxArray){
          let d = new Appointment({
            day: day,
            professionalId:prof,
            customerId:customerId+'',
            meetingLink: auxArray[day].map(e=>e.meetingLink),
            dates:auxArray[day].map(e=>e.date),
            description:description,
            numberOfSessions:auxArray[day].length
          });
          allAppointments.push(d.save());
        }
      }
      console.log('ALL APPOINTMENTS: ',allAppointments);
      return Promise.all(allAppointments);})
    .catch(e=>console.log('er: ',e))
}