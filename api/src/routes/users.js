const router = require ('express').Router();
const passport = require('passport');
const { loginAuth } = require('../controllers/auth/roleAuth');
const comparePassword = require('../controllers/functions/comparePassword');
const { userCreate, getUsersToForm, userDelete, userUpdate, getUserFullInfo } = require('../controllers/index')

router.post('/', (req, res, next) => {
    const body = req.body;
    userCreate(body)
        .then(result => res.json(result))
        .catch(err => next(err))
});

router.get('/', (req, res, next) => {
    getUsersToForm()
        .then(result => res.json(result))
        .catch(err => next(err))
});

router.get('/:username', (req, res, next) => {
    const {username} = req.params;
    getUserFullInfo(username)
        .then(result => res.json(result))
        .catch(err => next(err))
});

router.delete('/:username', loginAuth, (req,res,next)=>{
    let {username} = req.params;
    userDelete(username)
        .then(result => res.json(result))
        .catch(err => next(err))
});

router.put ('/:username', loginAuth, (req,res,next)=>{
    let {username} = req.params
    let updateInfo = req.body
    userUpdate(username,updateInfo)
        .then(result => res.json(result))
        .catch(err => next(err))
});

router.put ('/:username/password', (req,res,next)=>{
    let {username} = req.params
    let updateInfo = req.body
    userUpdate(username,updateInfo)
        .then(result => res.json(result))
        .catch(err => next(err))
});

router.post ('/:username/check', loginAuth, async(req,res,next)=>{
    let token = req.headers.jwt
    const response = await comparePassword(req.body,token)
    res.json(response)
});

module.exports = router; 