const Tip = require ('./../../models/Tip');

module.exports = (body) => {
    const {text,userId,isApproved,categoryId} = body
    const newTip = new Tip ({
        text,
        userId,
        isApproved,
        categoryId
    })
    return newTip.save()
};