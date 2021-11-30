const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const maxAge = 24 * 60 * 60;

router.post('/signin', async(req, res, next) => {
    passport.authenticate('signin', async(error, user, info) => {
        try {
            if(error) {
                return next(error);
            }
            if(user){
                req.login(user, {session: false}, (err) => {
                    if(err) return next(err);
                    const {_id, name, lastname, email, username, isProfessional, isAdmin} = user._doc;
                    const body = {_id, name, lastname, email, username, isProfessional, isAdmin};
                    const token = jwt.sign(JSON.stringify({_id, username, isAdmin}), process.env.SECRET);
                    res.cookie('isAdmin', isAdmin, {httpOnly: process.env.NODE_ENV === 'dev' ? false : true, secure: process.env.NODE_ENV === 'dev' ? false : true})
                    return res
                    .cookie('jwt',
                    token, {
                        httpOnly: process.env.NODE_ENV === 'dev' ? false : true,
                        secure: process.env.NODE_ENV === 'dev' ? false : true,
                        maxAge: maxAge * 1000
                        }
                    )
                    .json({
                        message: 'Success',
                        user: {...body, token}
                    })
                })
            }
            return res.json(info);
        } catch (e) {
            next(e);
        }
    }) (req, res, next)
});

router.get('/signout', (req, res) => {
    if (req.cookies['jwt']) {
        res
        .clearCookie('jwt')
        .json({
            message: 'Successfully logged out'
        })
    } else {
        next({
            status: 401,
            message: 'Invalid token'
        })
    }
})

module.exports = router;