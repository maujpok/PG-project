const Schedule = require('../../models/Schedule');

module.exports = (id) => {
    return Schedule.deleteMany({
        $and:[
            {userId:id},
            {availability:true}
        ]
    }).then(()=>console.log("delete done"))
};