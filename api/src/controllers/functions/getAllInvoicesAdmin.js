//admin function
const ClientInvoice = require("../../models/ClientInvoice");
const ProfInvoice = require('../../models/ProfInvoice');

module.exports = () => {
  let resp = [];
  resp.push (ClientInvoice.find().populate([{path: 'customerId', select: 'username'},
    {path: 'schedules',select: 'userId date.shortcut'}]));
  resp.push(ProfInvoice.find().populate([{path: 'customerId', select: 'username'},
    {path: 'schedules',select: 'userId date.shortcut'}]))
  return Promise.all(resp);
}