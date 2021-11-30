//admin function
const Category = require('../../models/Category');

module.exports = (id) => {
  return Category.deleteOne({_id:id},{new: true});
}