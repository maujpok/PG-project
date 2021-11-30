const {Router} = require("express");
const router = Router();
const Appointment = require("../models/Appointment");
//const {roleAuth, loginAuth} = require('../controllers/auth/roleAuth');

const {appointmentDelete, appointmentUpdate,getAppointment} = require("../controllers/index.js");

//POST APPOINTMENT      appointments are created at post(/INVOICE)
// router.post('/',(req,res,next)=>{
//   let data = req.body;
//   const newAppointment = new Appointment(data);
//   newAppointment.save()
//     .then(result => res.json(result))
//     .catch(err => next(err));
// });

//GET APPOINTMENTS by USER_ID
router.get('/:userId',(req, res, next)=>{
  let {userId} = req.params;
  let {as} = req.query;
  getAppointment(userId,as)
    .then(result => res.json(result))
    .catch(err => next(err));
});

//GET ALL APPOINTMENTS     only for testing, it will be deleted later
router.get('/',(req, res, next)=>{
  Appointment.find().populate('customerId', 'id username')
    .populate('professionalId', 'id username')
    .then(result => res.json(result))
    .catch(err => next(err));
});

//APPOINTMENT DELETE
router.delete('/:id', (req,res,next)=>{
  let {id} = req.params;
  appointmentDelete(id)
    .then(result => res.json(result))
    .catch(err => next(err));
});

//APPOINTMENT UPDATE
router.put('/:id', (req,res,next)=>{
  let {id} = req.params;
  let updateInfo = req.body;   // {date,status,etc} = req.body
  appointmentUpdate(id,updateInfo)
    .then(result => res.json(result))
    .catch(err => next(err));
});

module.exports = router;