const Category = require ('./../../models/Category');

module.exports = () => {
    return Category.updateMany(
        {_id:{$exists: true}},
        {$set:{searchCount:0}},
        {multi:true})
};