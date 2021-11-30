const router = require('express').Router();
const deleteOneSchedule = require('../controllers/functions/deleteOneSchedule');
// const clearSchedules = require('../controllers/functions/clearSchedules');
const deleteSchedules = require('../controllers/functions/deleteSchedules');
const getAllSchedules = require('../controllers/functions/getAllSchedules');
const getAvailableSchedules = require('../controllers/functions/getAvailableSchedules');
const getSchedulesById = require('../controllers/functions/getSchedulesById');
const postManySchedules = require('../controllers/functions/postManySchedules');
const postSchedule = require('../controllers/functions/postSchedule');
const setAvailability = require('../controllers/functions/setAvailability');

router.post('/', (req, res, next) => {
    const body = req.body;
    postSchedule(body)
        .then(result => res.json(result))
        .catch(err => next(err))
});

router.get('/', (req, res, next) => {
    getAllSchedules()
        .then(result => res.json(result))
        .catch(err => next(err))
});

router.get('/:id/true', (req, res, next) => {
    const {id} = req.params;
    getAvailableSchedules(id)
        .then(result => res.json(result))
        .catch(err => next(err))
});

router.get('/:id', (req, res, next) => {
    const {id} = req.params;
    getSchedulesById(id)
        .then(result => res.json(result))
        .catch(err => next(err))
});

router.delete('/', (req, res, next) => {
    deleteSchedules()
        .then(result => res.json(result))
        .catch(err => next(err))
});

router.delete('/:id', (req, res, next) => {
    const {id} = req.params;
    deleteOneSchedule(id)
        .then(result => res.json(result))
        .catch(err => netx(err))
});

router.put('/:id', (req, res, next) => {
    const {id} = req.params;
    const {value} = req.body;
    setAvailability(id,value)
        .then(result => res.json(result))
        .catch(err => next(err))
});

router.post('/many', (req, res, next) => {
    const body = req.body;
    postManySchedules(body)
        .then(result => res.json(result))
        .catch(err => next(err))
});


module.exports = router;