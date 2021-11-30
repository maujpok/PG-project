const ClientInvoice = require("../../models/ClientInvoice");
const ProfInvoice = require("../../models/ProfInvoice");

module.exports = (data) => {
  let allInvoices = [];
  let profData = {};
  let profPrice = {};
  const newClientInvoice = {
    customerId:data.customerId,
    numberOfSessions:data.cart.length,
    orderID: data.orderID,
    payerID: data.payerID,
    totalCost: data.cart.reduce((total,session)=>{return total+session.price},0),
    schedules: data.cart.map(session => {
      profData[session.professionalId]?profData[session.professionalId].push(session.id):profData[session.professionalId]=[session.id];
      profPrice[session.professionalId]?profPrice[session.professionalId]+=session.price:profPrice[session.professionalId]=session.price;      return {_id:session.id}
    }),
    description: data.cart.reduce((text,session)=>{
      if (text.includes(session.name)) return text
      else return text + session.name + ', ' },'').slice(0,-2)
  }
  const newCInv = new ClientInvoice(newClientInvoice);
  allInvoices.push(newCInv.save());
  for(let prof in profData){
    let i = new ProfInvoice ({
      orderID: data.orderID,
      profit: profPrice[prof]*0.75,
      customerId: data.customerId,
      schedules: profData[prof],
      professionalId: prof,
    });
    allInvoices.push(i.save());
  }

  return Promise.all(allInvoices);
}
