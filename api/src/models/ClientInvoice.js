const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientInvoice = new Schema(
  {
    customerId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    date: {
      type:Date,
      default: ()=>Date.now()
    },
    payerID: {
      type: String,
      required: true
    },
    orderID: {
      type: String,
      required: true
    },
    numberOfSessions: {
      type: Number
    },
    totalCost: {
      type: Number
    },
    description: {
      type: String
    },
    schedules: [{
      type: Schema.Types.ObjectId,
      ref: 'schedules',
      required: true
    }]
  },
  { timestamp: true }
)

// DATA DE PAYPAL:
// billingToken: null
// facilitatorAccessToken: "A21AAKWt8KqjD_MBPiqd6kkNCtzBWMjwoijD4HsUkTwy6bvJ3aUCQC4Rv0i6_QJo6Lwuym_iTx8HnCCqbcQwq-A65-Q0r3Jyw"
// orderID: "2S4615684E2248813"
// payerID: "P9TCTBGVG3NSS"
// paymentID: null

const ClientInvoice = mongoose.model('clientInvoices', clientInvoice);

module.exports = ClientInvoice;
