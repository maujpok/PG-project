//admin function
const Review = require ('../../models/Review');

module.exports = (id) => {
  return Review.deleteOne({_id:id},{new: true});
}