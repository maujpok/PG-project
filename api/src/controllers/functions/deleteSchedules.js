const Schedule = require('../../models/Schedule');

module.exports = async () => {
    return Schedule.deleteMany({})
};