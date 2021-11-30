const Schedule = require('../../models/Schedule');

module.exports = async () => {
    return Schedule.find().sort({'date.shortcut':1})
};