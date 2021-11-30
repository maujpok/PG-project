const dateToObj = require('../../helpers/dateToObj');
const Schedule = require('../../models/Schedule');


module.exports = async(body) => {
    const {date, availability, userId} = body;
    const data = dateToObj(date);
    let newSchedule = await new Schedule({
        date: data,
        availability,
        userId
    })

    return newSchedule.save()
};