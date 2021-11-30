const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const decodeJwt = async (token) => {
    const jwtVerify = promisify(jwt.verify);
    return await jwtVerify(token, process.env.SECRET);
}

const roleAuth = async(req, res, next) => {
    if(req.headers && req.headers.jwt){
        try {
            const decodedtoken = await decodeJwt(req.headers.jwt);
            if(decodedtoken.isAdmin === true) return next();
            else return next({status: 401, message: 'Not allowed'})
        } catch (error) {
            next(error);
        }
    }
    else {
        return next({status: 401, message: 'No token provided'})
    }
}

const loginAuth = async (req, res, next) => {
    let token = null;
    if(req.headers && req.headers.jwt){
        token = req.headers.jwt;
    }
    if(!token){
        return next({status: 401, message: 'Not allowed'});
    }
    try {
        const decodedtoken = await decodeJwt(token);
        if(decodedtoken) return next();
        else return next({status: 401, message: 'Not allowed'});
    } catch (error) {
        next(error);
    }
}

module.exports = {
    roleAuth,
    loginAuth,
    decodeJwt
}