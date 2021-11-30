const Schedule = require('../../models/Schedule');

module.exports = async(id) => {
    return Schedule.find({
        $and: [
            {userId:id},
            {availability:true}
        ]
    }).sort({'date.shortcut':1})
};