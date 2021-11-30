const router = require('express').Router();
const postContactForm = require('../controllers/functions/postContactForm');
const ContactForm = require('../models/ContactForm');


router.post('/', (req, res, next) => {
    const body = req.body;
    postContactForm(body)
        .then(result => res.json(result))
        .catch(err => next(err))
});

router.get('/', async (req, res, next) => {
    await ContactForm.find()
        .then(result => res.json(result))
        .catch(err => next(err))
});

router.delete('/', async (req, res, next) => {
    await ContactForm.deleteMany({})
        .then(result => res.json(result))
        .catch(err => next(err))
});

module.exports = router;