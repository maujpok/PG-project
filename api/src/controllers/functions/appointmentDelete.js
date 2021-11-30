//admin function
const Appointment = require ('../../models/Appointment');

module.exports = (id) => {
  return Appointment.deleteOne({_id:id},{new: true});
}