const Review = require('../../models/Review');

module.exports = (_id) => {
  return Review.deleteOne({_id},{new: true});
}