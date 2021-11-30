const ContactForm = require('../../models/ContactForm');

module.exports = async (body) => {

    let contact = await new ContactForm(body)

    return contact.save()
};