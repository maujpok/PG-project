
const router = require('express').Router();
const categories = require('./categories');
const admin = require('./admin');
const users = require('./users');
const countries = require('./countries');
const login = require('./signin-signup');
const tips = require('./tips');
const professionals = require('./professionals')
const reviews = require('./reviews')
const schedules = require('./schedules');
const feedback = require('./feedback');
const invoice = require('./invoice');
const emails = require('./emails');
const appointment = require('./appointment');
const report =  require('./report');
const contact = require('./contact');

router.use('/tips', tips);
router.use('/professionals', professionals);
router.use('/reviews', reviews);
router.use('/categories', categories);
router.use('/admin', admin);    
router.use('/users', users);
router.use('/login', login); //esta ruta valida el inicio de sesión
router.use('/countries', countries);
router.use('/schedules', schedules);
router.use('/feedback', feedback);
router.use('/invoice',invoice);
router.use('/emails', emails);
router.use('/appointment',appointment);
router.use('/report', report);
router.use('/contact', contact);

router.get('/', (req, res) => {
    res.send({
        Welcome: " to the Latam Exponential API",
        admin: 'http://localhost:3001/admin',
        login: 'http://localhost:3001/login',
        users: 'http://localhost:3001/users',
        professionals: 'http://localhost:3001/professionals',
        categories: 'http://localhost:3001/categories',
        countries: 'http://localhost:3001/countries',
        reviews: 'http://localhost:3001/reviews',
        tips: 'http://localhost:3001/tips',
        schedules: 'http://localhost:3001/schedules',
        feedback: 'http://localhost:3001/feedback',
        invoice: 'http://localhost:3001/invoice',
        report: 'http://localhost:3001/report',
        contactForm: 'http://localhost:3001/contact',
        appointment: 'http://localhost:3001/appointment'
    })
});



module.exports = router;
