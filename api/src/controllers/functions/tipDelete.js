//admin function
const Tip = require ('../../models/Tip');

module.exports = (id) => {
  return Tip.deleteOne({_id:id},{new: true});
}