const User = require('../../models/User');
const bcrypt = require('bcrypt');
const { decodeJwt } = require('../auth/roleAuth');
const userUpdate = require('./userUpdate');

module.exports = async(body,token) => {
    const {password, newPassword} = body;
    if(token){
        const user = await decodeJwt(token);
        const userData = await User.findOne({username: user.username});
        try{
            if(userData){
                if(await bcrypt.compare(password, userData.password)){
                    const response = await userUpdate(user.username, {password: newPassword})
                    return Object.keys(response).length? true: false
                    }
                }
            }catch(e){
                console.log(e)
        }
    };
}   