const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profInvoice = new Schema(
  {
    orderID: {
      type: String,
      required: true
    },
    schedules: [{
      type: Schema.Types.ObjectId,
      ref: 'schedules',
      required: true
    }],
    professionalId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    customerId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    profit: {
      type: Number
    },
    availableDate: {
      type: Date,
      default: ()=>Date.now() + 336*60*60*1000 //2 semanas
    }
  },
  { timestamp: true }
)

const ProfInvoice = mongoose.model('profInvoices', profInvoice);

module.exports = ProfInvoice;
