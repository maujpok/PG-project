const router = require('express').Router()
const { getAllProfs, getProfByUsername,updateSessionProf } = require('../controllers/index.js')
const {loginAuth} = require("../controllers/auth/roleAuth");

//esta ruta es : /profesionales

router.get('/', getAllProfs)
router.get('/:username', getProfByUsername)

router.put('/session',loginAuth,(req,res,next)=>{
  let {id}=req.body;
  updateSessionProf({_id:id})
    .then(result => res.json(result))
    .catch(err => next(err))
});

module.exports = router