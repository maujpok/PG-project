const {Router} = require("express");
const router = Router();
const passport = require('passport');
const {getReviews, postReview, deleteReview, reviewUpdate} = require('../controllers/index.js');

router.get('/',(req,res,next)=>{
  const userId = req.query
  getReviews(userId)
    .then(result => res.json(result))
    .catch(err => next(err));
});

//passport.authenticate('jwt', {session: false}),
router.post('/',  (req, res, next) => {
  const body = req.body;
  postReview(body)
    .then(result => res.json(result))
    .catch(err => next(err));
});

//passport.authenticate('jwt', {session: false}),
router.delete('/:id', (req,res,next) => {
  const param = req.params.id
  deleteReview(param)
    .then(result=> res.json(result))
    .catch(err=>next(err))
})

router.put('/:id', (req,res,next) => {
  const id = req.params.id
  const data = req.body
  reviewUpdate(id,data)
    .then(result=>res.json(result))
    .catch(err=>next(err))
})

module.exports = router;