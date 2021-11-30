const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactForm = new Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: Number
        },
        thematic: {
            type: String,
            required:true
        },
        message: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
});

const ContactForm = mongoose.model('contactForms', contactForm);

module.exports = ContactForm;
