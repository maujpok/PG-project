const {Router} = require("express");
const router = Router();
const {postReport} = require('../controllers/index.js');

router.post('/',(req,res,next)=>{
  let data = req.body;
  postReport(data)
    .then(result => res.json(result))
    .catch(err => next(err));
});

module.exports = router;