const User = require('../../models/User');

module.exports = (username) => {
    
    return User.find({username})
    .populate(
        "country", 'name'
    )
    .populate(
        "category", 'name'
    )
};