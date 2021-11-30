const ClientInvoice = require("../../models/ClientInvoice");
const ProfInvoice = require('../../models/ProfInvoice');

module.exports = (userId,as) =>{
  if (as === 'prof') {
    return ProfInvoice.find({professionalId: userId}).populate('customerId','username').populate('schedules','date'); } //:userId?as=prof
  else return ClientInvoice.find({customerId:userId}).populate('schedules','date');   //:userId?as=client o sin query
}

// IGNORAR COMENTARIOS  (son ayuda memoria que voy a borrar)
// ClientInvoice.find({customerId}).select('numberOfSessions orderID totalCost description date')
// .populate([{path: 'customerId', select: 'username'},
// {path: 'schedules',select: 'userId'}])
// ProfInvoice.find({professionalId:userId})
//     .populate([{path: 'customerId', select: 'username'},
//     {path: 'schedules',select: 'date userId'}])