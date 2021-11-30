const Report = require('../../models/Report');

module.exports = (data) => {
  const newRep = new Report(data);
  return newRep.save();
}