//admin function
const Tip = require('../../models/Tip');

module.exports = () => {
  return Tip.find().sort({isApproved:1}).populate('categoryId','name');
}