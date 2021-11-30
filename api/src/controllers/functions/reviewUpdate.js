//admin function
const Review = require('../../models/Review');

module.exports = (id,updateInfo) => {
  return Review.findByIdAndUpdate(id,{
    $set: updateInfo
  }, {new: true});
}