import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {delAdminUser, putAdminUser} from '../../../Controllers/actions/adminActions';
import * as FaIcons from "react-icons/fa";
import Swal from 'sweetalert2';
import {sendMail} from "../../../ApiReq/mails";
import passwordGenerator from "../ResetPassword/passwordGenerator";

function UserRow({user, token}){
  const dispatch = useDispatch();
  const [shown,setShown] = useState(true);
  const userOnPage = useSelector(state=>state.sessionReducer.status);

  function handleUserDelete(username){
    if(userOnPage.id===user._id) return Swal.fire({text:'No puedes realizar esta acción sobre tu propio usuario, debe hacerlo otro administrador.',showConfirmButton:false,icon:"error"});
    else return Swal.fire({
      text:`Desea borrar a ${username}? Esta acción no se puede deshacer.`,
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si',
      confirmButtonColor: "rgba(232,52,84,0.84)",
      cancelButtonColor: "#8c8f9a",
    }).then(result=>{
      if(result.isConfirmed){
        dispatch(delAdminUser(username, token));
        Swal.fire({
          text:`${username} eliminado.`,
          icon:'error',
          confirmButtonColor: "rgba(232,52,84,0.84)"});
      setShown(false);
      }});
  }
  function handleResetPassword(username,email){
    return Swal.fire({
      text:`Desea restablecer el password de ${username}?`,
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si',
      confirmButtonColor: "rgb(165 220 134)",
      cancelButtonColor: "#8c8f9a",
    }).then(result => {
      if(result.isConfirmed){
        let password = passwordGenerator();
        dispatch(putAdminUser(username, {password}, token));  //modificar putUser en apireq/admin con {...info,force:true}?
        Swal.fire({
          text:`Cotraseña cambiada, instrucciones enviadas a ${email}.`,
          icon:'success',
          confirmButtonColor: "rgb(165 220 134)"});
        sendMail("resetPassAdmin",{password,username,email})
      }});
  }
  function handleChangeRole(username,isAdmin){
    if(userOnPage.id===user._id) return Swal.fire({text:'No puedes realizar esta acción sobre tu propio usuario, debe hacerlo otro administrador.',showConfirmButton:false,icon:"error"});
    return Swal.fire({
      text:`Desea cambiar el rol de ${username}?`,
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si',
      confirmButtonColor: "rgb(165 220 134)",
      cancelButtonColor: "#8c8f9a",
  }).then(result => {
      if (result.isConfirmed) {
        dispatch(putAdminUser(username, {isAdmin: !isAdmin}, token));
        Swal.fire({
          text:`${username} ahora es ${isAdmin?'usuario':'administrador'}.`,
          icon:'success',
          confirmButtonColor: "rgb(165 220 134)"});
        user.isAdmin = !user.isAdmin;
      }})
  }
  function handleVerifyUser(username,isVerified){
    return Swal.fire({
      text:`Desea ${!isVerified?'verificar':'remover la verificación de'} la cuenta de ${username}? Si ${!isVerified?'':'no'} está verificada ${!isVerified?'':'no'} se ofrecerán sus servicios.`,
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: `${!isVerified?'Verificar':'Remover'}`,
      confirmButtonColor: `${!isVerified?'rgb(165 220 134)':'rgba(232,52,84,0.84)'}`,
      cancelButtonColor: "#8c8f9a",
    }).then(result=>{
      if(result.isConfirmed){
        dispatch(putAdminUser(username, {isVerified: !isVerified}, token));
        Swal.fire({
          text:`Estado de cuenta cambiado.`,
          icon:'success',
          confirmButtonColor: "rgb(165 220 134)"});
        user.isVerified = !user.isVerified;
      }});
  }

  return ( shown &&
    <div className="col-1-4@xl col-1-3@lg col-1-2@md col-1-1@sm col-1-1@xs padd-md">
      <div className="padd-md bg-color-extra4-a20 border-color-dark-a20 border-radius-sm shadow-md">
        {/* Image - Username - User */}
        <div className="padd-md flex-center-left">
          <div
            className="icon-2x uk-background-cover border-radius-100"
            data-src={user.img || "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?b=1&k=20&m=1300845620&s=170667a&w=0&h=JbOeyFgAc6-3jmptv6mzXpGcAd_8xqkQa_oUK2viFr8="}
            data-uk-img="">
          </div>
          <div className="padd-md-l">
            <div className="font-main text-bold normalize">
              {(user.name || '')  + ' ' + (user.lastname || '')}
            </div>
            <div className="font-sm font-main text-bold">
              {user.username}
            </div>          
          </div>
        </div>

        {/* Email */}
        <div className="padd-md font-sm flex-bar">
          <div className="text-bold">Email:</div>
          <span>{user.email}</span>
        </div>

        {/* User Role */}
        <div className="padd-md font-sm flex-bar">
          <div className="text-bold">Rol:</div>
            {
              user.isAdmin?
              <span className="padd-xs-tb padd-md-lr text-bold font-xs border-radius-xl bg-red-200 text-gray-800">
                Admin
              </span>
              :
              <span className="padd-xs-tb padd-md-lr text-bold font-xs border-radius-xl bg-green-200 text-gray-800">
                Usuario
              </span>
            }  
        </div>

        {/* User Type */}
        <div className="padd-md font-sm flex-bar">
          <div className="text-bold">Tipo de Usuario:</div>
          {
            user.isProfessional ?
            <span className="padd-xs-tb padd-md-lr text-bold font-xs border-radius-xl bg-blue-200 text-gray-800">
              Profesional
            </span>
            :
            <span className="padd-xs-tb padd-md-lr text-bold font-xs border-radius-xl bg-pink-300 text-gray-800">
              Cliente
            </span>
          }
        </div>

        {/* Is Verified */}
        <div className="padd-md font-sm flex-bar">
          <div className="text-bold">Usuario Verificado:</div>
          {user.isProfessional?<button onClick={() => handleVerifyUser(user.username, user.isVerified)}>{
            user.isVerified ? <FaIcons.FaCheck color={'green'}/> : <FaIcons.FaTimes color={'red'}/>}</button>:'No Aplica'}
        </div>

        {/* Reset Password */}
        <div className="padd-md font-sm">
          <button
            className="width-100 padd-sm border-radius-sm action action-primary flex-center"
            onClick={()=>handleResetPassword(user.username,user.email)}
          >
            <FaIcons.FaRedo/>&emsp;Restablecer Contraseña
          </button>
        </div>

        {/* Change Role */}
        <div className="padd-md font-sm">
          <button
            className="width-100 padd-sm border-radius-sm action action-primary flex-center"
            onClick={()=>handleChangeRole(user.username,user.isAdmin)}>
            <FaIcons.FaUserFriends/>&emsp;Cambiar Rol
          </button>
        </div>

        {/* Delete Account */}
        <div className="padd-md font-sm">
          <button 
            className="width-100 padd-sm border-radius-sm action action-danger flex-center"
            onClick={()=>handleUserDelete(user.username)}
          >
            <FaIcons.FaRegTrashAlt/>&emsp;Eliminar Usuario
          </button>
        </div>
      </div>
    </div>
  )
}
export default UserRow;