const Schedule = require('../../models/Schedule');

module.exports = async(id) => {
    return Schedule.findById(id)
};