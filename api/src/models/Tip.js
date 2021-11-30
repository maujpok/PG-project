const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tip = new Schema(
    {
        text: {
            type: String,
            required: true,
        },
        isApproved:{
            type: Boolean,
            default: false,
        },
        userId: {
            type: Schema.Types.ObjectId, 
            ref: 'users',
            required: true,
        },
        categoryId: {
          type: Schema.Types.ObjectId,
          ref: 'categories',
        }
    },
    { timestamp: true }
)

const Tip = mongoose.model('tips', tip);

module.exports = Tip;
