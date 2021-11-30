//admin function
const User = require('../../models/User');
const Schedule = require('../../models/Schedule');
const Review = require('../../models/Review');

module.exports = async (username) => {
  const getId = await User.findOne({username}).then(data=>data._id)
  const id = getId.toString()
  
  await Schedule.deleteMany({userId:id}).then(()=> console.log("schedules deleted"))
  await Review.deleteOne({userId:id}).then(()=> console.log("review deleted"))
  return User.deleteOne({username},{new: true});
}