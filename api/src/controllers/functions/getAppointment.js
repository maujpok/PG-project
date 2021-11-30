const Appointment = require("../../models/Appointment");

module.exports = (userId,as) => {
  if (as === 'prof') return Appointment.find({professionalId: userId})
    .populate([{path: 'customerId', select: 'name lastname'},
      {path: 'professionalId', select: 'meetingUrl'}]);
  else return Appointment.find({customerId: userId})
    .populate([{path: 'customerId', select: 'name lastname'},
      {path: 'professionalId', select: 'meetingUrl'}]);
}