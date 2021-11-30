//admin function
const User = require('../../models/User');
const bcrypt = require('bcrypt');
const { update } = require('../../models/User');

module.exports = async(username,updateInfo) => {
  if(updateInfo.force){
    console.log(updateInfo.password)
    const newPass = await bcrypt.hash(updateInfo.password,10)
    return await User.findOneAndUpdate({username},{
      $set: {password:newPass}

    }, {new: true}).select({username:1, email:1});

  }else{    

    if(updateInfo.password){
    
      const userData = await User.findOne({username});
      if(userData){
    
        if(await bcrypt.compare(userData.password, updateInfo.password)){
    
          return await User.findOneAndUpdate({username},{
            $set: updateInfo    
          }, {new: true}).select({username:1, email:1});
        
        }else{
    
          const newPass = await bcrypt.hash(updateInfo.password,10)
          updateInfo.password=newPass
          return await User.findOneAndUpdate({username},{
            $set: updateInfo 
          }, {new: true}).select({username:1, email:1});
        }
      }
    }
    if(!updateInfo.password){
      return await User.findOneAndUpdate({username},{
        $set: updateInfo
      }, {new: true}).select({username:1, email:1}); 
    }
  }
}                                                   
//el select es por si queremos que la funcion
// devuelva el username y el email del usuario actualizado
// y el {new: true} que esta en varias funciones es por si
//quiero que me devuelva el resultado del update
