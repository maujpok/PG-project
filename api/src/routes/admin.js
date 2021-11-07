//admin routes
const {Router} = require("express");
const router = Router();
const passport = require('passport');
const roleAuth = require('../controllers/auth/roleAuth');
const {
  getAllUsersAdmin,
  userDelete,
  userUpdate,
  appointmentDelete,
  appointmentUpdate,
  categoryCreate,
  categoryUpdate,
  categoryDelete,
  postTips,
  tipUpdate,
  tipDelete,
  getAllTipsAdmin,
  getAllReviewsAdmin, reviewUpdate, reviewDelete
} = require('../controllers/index.js');
const Appointment = require('../models/Appointment');

//GET ALL USERS
router.post('/users', passport.authenticate('jwt', {session: false}), roleAuth, (req,res,next)=>{
  getAllUsersAdmin()
    .then(result => res.json(result))
    .catch(err => next(err));
});
//USER DELETE
router.delete('/users/:username', (req,res,next)=>{
  let {username} = req.params;
  userDelete(username)
    .then(result => res.json(result))
    .catch(err => next(err));
});
//USER UPDATE
router.put('/users/:username', (req,res,next)=>{
  let {username} = req.params;
  let updateInfo = req.body;  // {name,email,password,isAdmin,etc} = req.body
  userUpdate(username,updateInfo)
    .then(result => res.json(result))
    .catch(err => next(err));
});

//GET ALL APPOINTMENTS
router.get('/appointment',(req,res,next)=>{
  Appointment.find().populate('customerId', 'id username')
    .populate('professionalId', 'id username')
    .then(result => res.json(result))
    .catch(err => next(err));
})
//APPOINTMENT DELETE
router.delete('/appointment/:id', (req,res,next)=>{
  let {id} = req.params;
  appointmentDelete(id)
    .then(result => res.json(result))
    .catch(err => next(err));
});
//APPOINTMENT UPDATE
router.put('/appointment/:id', passport.authenticate('jwt', {session: false}), roleAuth, (req,res,next)=>{
  let {id} = req.params;
  let updateInfo = req.body;   // {date,status,etc} = req.body
  appointmentUpdate(id,updateInfo)
    .then(result => res.json(result))
    .catch(err => next(err));
});

//CATEGORY CREATE
router.post('/category', passport.authenticate('jwt', {session: false}), roleAuth, (req,res,next)=>{
  let {img,name,searchCount} = req.body;
  categoryCreate({img,name,searchCount})
    .then(result => res.json(result))
    .catch(err => next(err));
});
//CATEGORY UPDATE
router.put('/category/:id', passport.authenticate('jwt', {session: false}), roleAuth, (req,res,next)=>{
  let {id} = req.params;
  let {img,name,searchCount} = req.body;   // {name,img,searchCount,etc} = req.body
  categoryUpdate(id,{img,name,searchCount})
    .then(result => res.json(result))
    .catch(err => next(err));
});
//CATEGORY DELETE
router.delete('/category/:id', (req,res,next)=>{
  let {id} = req.params;
  categoryDelete(id)
    .then(result => res.json(result))
    .catch(err => next(err));
});

//GET ALL TIPS
router.post('/tips', passport.authenticate('jwt', {session: false}), roleAuth,(req,res,next)=>{
  getAllTipsAdmin()
    .then(result => res.json(result))
    .catch(err => next(err));
});
//TIP CREATE
router.post('/tips/add', passport.authenticate('jwt', {session: false}), roleAuth, (req,res,next)=>{
  let {text} = req.body;
  postTips({text,isApproved:true})
    .then(result => res.json(result))
    .catch(err => next(err));
});
//TIP UPDATE
router.put('/tips/:id',  passport.authenticate('jwt', {session: false}), roleAuth, (req,res,next)=>{
  let {id} = req.params;
  let {text,isApproved} = req.body;
  tipUpdate(id,{text,isApproved})
    .then(result => res.json(result))
    .catch(err => next(err));
});
//TIP DELETE
router.delete('/tips/:id', (req,res,next)=>{
  let {id} = req.params;
  console.log(req.body);
  tipDelete(id)
    .then(result => res.json(result))
    .catch(err => next(err));
});

//GET ALL REVIEWS
router.post('/reviews', passport.authenticate('jwt', {session: false}), roleAuth,(req,res,next)=>{
  getAllReviewsAdmin()
    .then(result => res.json(result))
    .catch(err => next(err));
});
//REVIEW UPDATE
router.put('/reviews/:id', passport.authenticate('jwt', {session: false}), roleAuth,(req,res,next)=>{
  let {id} = req.params;
  let updateInfo = req.body;
  reviewUpdate(id,updateInfo)
    .then(result => res.json(result))
    .catch(err => next(err));
});
//REVIEW DELETE
router.delete('/reviews/:id',(req,res,next)=>{
  let {id} = req.params;
  reviewDelete(id)
    .then(result => res.json(result))
    .catch(err => next(err));
});

module.exports = router;

