const { Router } = require('express');
const router = Router();

//Aquí importamos todas las rutas, solo puse un ejemplo
const professionals = require('./professionals');
const tips = require('./tips');
const reviews = require('./reviews');
const categories = require('./categories');
const admin = require('./admin');
const users = require('./users');
const login = require('./login');
const countries = require('./countries');


router.use('/tips', tips);
router.use('/professionals', professionals);
router.use('/reviews', reviews);
router.use('/categories', categories);
router.use('/admin', admin);    //ruta que falta proteger con middleware
router.use('/users', users);
router.use('/login', login); //esta ruta valida el inicio de sesión
router.use('/countries', countries);

module.exports = router;