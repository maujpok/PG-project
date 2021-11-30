const Review = require ('./../../models/Review');
const User = require('./../../models/User')

module.exports = ({userId}) => {
  if(userId){
    return Review.findOne({userId})
  }
  return Review.aggregate([
    {$match: {rate:'Good'}},
    {$sample: {size: 4}},
    {$lookup: {
      from: 'users', 
      localField: 'userId', 
      foreignField: '_id',
      as: 'user'}},
    {$project:{
      "text":1,
      "user.username":1
    }}
  ])
};
