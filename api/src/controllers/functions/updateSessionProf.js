const User = require ('./../../models/User');

module.exports = (data) => {
  return User.findOneAndUpdate(data,
    {$inc:{session: 1}},
    {new: true});
}