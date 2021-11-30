//admin function
const User = require('../../models/User');

module.exports = () => {
  return User.find().collation({locale:'en'})
    .sort({username:1})
    .select('name username lastname email isProfessional isAdmin img _id isVerified isActive');
}