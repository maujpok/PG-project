//admin routes
const {Router} = require("express");
const router = Router();
const {roleAuth, loginAuth} = require('../controllers/auth/roleAuth');
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
  getAllTipsAdmin, getAllInvoicesAdmin,
  getAllReviewsAdmin, reviewUpdate, reviewDelete, setSearchCount
} = require('../controllers/index.js');
const Appointment = require('../models/Appointment');
const Report = require('../models/Report');


//GET ALL USERS
router.get('/users', loginAuth, roleAuth, (req,res,next)=>{
    getAllUsersAdmin()
    .then(result => res.json(result))
    .catch(err => next(err));
});
//USER DELETE
router.delete('/users/:username', loginAuth, roleAuth, (req,res,next)=>{
  let {username} = req.params;
  userDelete(username)
    .then(result => res.json(result))
    .catch(err => next(err));
});
//USER UPDATE
router.put('/users/:username', loginAuth, roleAuth, (req,res,next)=>{
  let {username} = req.params;
  let updateInfo = req.body;  // {name,email,password,isAdmin,etc} = req.body
  userUpdate(username,updateInfo)
    .then(result => res.json(result))
    .catch(err => next(err));
});

//GET ALL APPOINTMENTS      , loginAuth, roleAuth
router.get('/appointment',(req,res,next)=>{
  Appointment.find().populate('customerId', 'id username')
    .populate('professionalId', 'id username')
    .then(result => res.json(result))
    .catch(err => next(err));
})
//APPOINTMENT DELETE
router.delete('/appointment/:id', loginAuth, roleAuth,(req,res,next)=>{
  let {id} = req.params;
  appointmentDelete(id)
    .then(result => res.json(result))
    .catch(err => next(err));
});
//APPOINTMENT UPDATE
router.put('/appointment/:id', loginAuth, roleAuth, (req,res,next)=>{
  let {id} = req.params;
  let updateInfo = req.body;   // {date,status,etc} = req.body
  appointmentUpdate(id,updateInfo)
    .then(result => res.json(result))
    .catch(err => next(err));
});

//CATEGORY CREATE
router.post('/category', loginAuth, roleAuth, (req,res,next)=>{
  let {img,name,searchCount} = req.body;
  categoryCreate({img,name,searchCount})
    .then(result => res.json(result))
    .catch(err => next(err));
});
//CATEGORY CLEAN SEARCHCOUNT
router.put('/category/set', loginAuth, roleAuth, async (req, res, next)  => {
  setSearchCount()
    .then(result => res.json(result))
    .catch(err => next(err));
});
//CATEGORY UPDATE
router.put('/category/:id', loginAuth, roleAuth, (req,res,next)=>{
  let {id} = req.params;
  let {img,name,searchCount} = req.body;   // {name,img,searchCount,etc} = req.body
  categoryUpdate(id,{img,name,searchCount})
    .then(result => res.json(result))
    .catch(err => next(err));
});
//CATEGORY DELETE
router.delete('/category/:id', loginAuth, roleAuth, (req,res,next)=>{
  let {id} = req.params;
  categoryDelete(id)
    .then(result => res.json(result))
    .catch(err => next(err));
});

//GET ALL TIPS
router.get('/tips', loginAuth, roleAuth, (req,res,next)=>{
  getAllTipsAdmin()
    .then(result => res.json(result))
    .catch(err => next(err));
});
//TIP CREATE
router.post('/tips', loginAuth, roleAuth, (req,res,next)=>{
  let data = req.body;
  postTips(data)
    .then(result => res.json(result))
    .catch(err => next(err));
});
//TIP UPDATE
router.put('/tips/:id', loginAuth, roleAuth, (req,res,next)=>{
  let {id} = req.params;
  let {text,isApproved} = req.body;
  tipUpdate(id,{text,isApproved})
    .then(result => res.json(result))
    .catch(err => next(err));
});
//TIP DELETE
router.delete('/tips/:id', loginAuth, roleAuth, (req,res,next)=>{
  let {id} = req.params;
  tipDelete(id)
    .then(result => res.json(result))
    .catch(err => next(err));
});

//GET ALL REVIEWS
router.get('/reviews', loginAuth, roleAuth, (req,res,next)=>{
  getAllReviewsAdmin()
    .then(result => res.json(result))
    .catch(err => next(err));
});
//REVIEW UPDATE
router.put('/reviews/:id', loginAuth, roleAuth, (req,res,next)=>{
  let {id} = req.params;
  let updateInfo = req.body;
  reviewUpdate(id,updateInfo)
    .then(result => res.json(result))
    .catch(err => next(err));
});
//REVIEW DELETE
router.delete('/reviews/:id', loginAuth, roleAuth, (req,res,next)=>{
  let {id} = req.params;
  reviewDelete(id)
    .then(result => res.json(result))
    .catch(err => next(err));
});

//GET "ALL" INVOICES
router.get('/invoices', loginAuth, roleAuth,(req,res,next)=>{
  getAllInvoicesAdmin()
    .then(result => res.json(result))
    .catch(err => next(err))
});

//GET ALL REPORTS        , loginAuth, roleAuth
router.get('/reports',(req,res,next)=>{
  Report.find().populate('userId','username')
    .then(result => res.json(result))
    .catch(err => next(err));
});









module.exports = router;