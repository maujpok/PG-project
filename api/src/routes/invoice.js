const {Router} = require("express");
const router = Router();
const {invoiceCreate,getInvoicesUser,deleteOneInvoice,appointmentCreate} = require('../controllers/index.js');

//POST NEW INVOICE
router.post('/',(req,res,next)=>{
  let data = req.body;
  invoiceCreate(data)
    .then(result => {
      const ML = {};
      data.cart.forEach(elem => ML[elem.id] = elem.meetingLink);
      return appointmentCreate(result, ML)})
    .then(result => res.json(result))
    .catch(err => next(err));
});

//GET INVOICEs BY userId
router.get('/:userId',(req,res,next)=>{
  let {userId} = req.params;
  let {as} = req.query;
  getInvoicesUser(userId,as)
    .then(result => res.json(result))
    .catch(err => next(err));
});

//DELETE INVOICEs by orderID :c
router.delete('/:orderID',(req,res,next)=>{
  let {orderID} = req.params;
  deleteOneInvoice(orderID)
    .then(result => res.json(result))
    .catch(err => next(err));
});

module.exports = router;