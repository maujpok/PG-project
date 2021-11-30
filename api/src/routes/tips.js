const {Router} = require("express");
const router = Router();
const {loginAuth} = require('../controllers/auth/roleAuth');
const {getTips, postTips, tipDelete} = require('../controllers/index.js');

router.get('/',(req,res,next)=>{
  const {userId} = req.query
  getTips(userId)
    .then(result => res.json(result))
    .catch(err => next(err))
});
//passport.authenticate('jwt', {session: false}),
router.post('/', loginAuth, (req, res, next) => {
  const body = req.body;
  postTips(body)
    .then(result => res.json(result))
    .catch(err => next(err))
});

router.delete('/:tipId', loginAuth, (req, res, next) => {
  const {tipId} = req.params;
  tipDelete(tipId)
    .then(result => res.json(result))
    .catch(err => next(err))
});

module.exports = router;
