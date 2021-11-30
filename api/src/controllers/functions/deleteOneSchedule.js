const Schedule = require('../../models/Schedule');

module.exports = (id) =>{
    return Schedule.deleteOne({_id:id})
};