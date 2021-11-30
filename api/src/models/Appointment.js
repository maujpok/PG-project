const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointment = new Schema(
    {
      day:{
        type: String
      },
      description: {
        type: String
      },
      dates:[{
          shortcut:{
            type: Number
          },
          datefull:{
            type:String
          }
        }],
      numberOfSessions:{
        type:Number
      },
      status: {
            type: String,
            enum: ['attended', 'pending'],
            default: 'pending',
        },
      customerId: {
            type: Schema.Types.ObjectId, 
            ref: 'users',
            required: true,
        },
      professionalId: {
            type: Schema.Types.ObjectId, 
            ref: 'users',
            required: true,
        },
      meetingLink: [{
          type: String
        }]
    },
    { timestamp: true }
)

const Appointment = mongoose.model('appointments', appointment);

module.exports = Appointment;
