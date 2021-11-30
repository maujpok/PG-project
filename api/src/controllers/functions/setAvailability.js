const Schedule = require('../../models/Schedule');

module.exports = async(id, value) => {
    return Schedule.updateOne(
        {
            _id:id
        },
        {
            $set:{
                availability: value
            }
        }
    )
};