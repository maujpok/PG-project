const User = require("../../models/User");

module.exports = (username) => {
  return User.findOne({ username }, "meetingUrl");
};
