const Tip = require ('./../../models/Tip');

module.exports = (userId) => {
  if(userId){
    return Tip.find({userId})
  }
  return Tip.aggregate([
    {$match:{isApproved:true}},
    {$sample: {size: 5}}
  ])
};