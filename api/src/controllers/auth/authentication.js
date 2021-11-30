const LocalStrat = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../../models/User');
const passport = require('passport');

passport.use('signin', new LocalStrat({
    usernameField: 'username',
    passwordField: 'password'
}, async(username, password, done) => {
    const user = await User.findOne({username});
    if(!user) return done(null, false, {message: 'Usuario incorrecto'});
    try {
        if(await bcrypt.compare(password, user.password)) {
            return done(null, user);
        }
        else return done(null, false, {message:'Contraseña incorrecta'});
    } catch (error) {
        return done(error);
    }
}));
