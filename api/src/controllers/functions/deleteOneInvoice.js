const ClientInvoice = require("../../models/ClientInvoice");
const ProfInvoice = require('../../models/ProfInvoice');

module.exports = (orderID) => {
  return ClientInvoice.deleteMany({orderID})
    .then(() => ProfInvoice.deleteMany({orderID}))
}