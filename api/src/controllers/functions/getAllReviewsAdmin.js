//admin function
const Review = require('../../models/Review');

module.exports = () => {
  return Review.find().sort({rate:1}).populate('userId', 'id username');
}