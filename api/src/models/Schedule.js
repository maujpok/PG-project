const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schedule = new Schema(
    {
        date: {
            year:{
                type: Number
            },
            month:{
                type: String
            },
            dayNumber:{
                type: Number
            },
            dayName:{
                type: String
            },
            time:{
                type: String
            },
            shortcut:{
                type: Number
            },
            datefull:{
                type:String
            }
        },
        availability: {
            type:Boolean,
            default:true
        },
        userId: {
            type:Schema.Types.ObjectId,
            ref: 'users',
            required:true
        }
    },
    // {timestamps:true}
)

const Schedule = mongoose.model('schedules', schedule);

module.exports = Schedule;