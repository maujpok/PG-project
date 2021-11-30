import React, {useState} from "react";
import validate from "../../../Tools/validations";
import {useSelector} from "react-redux"
import { createUser } from "../../../ApiReq/users";
import GoogleLogin from "react-google-login";
import { GOOGLE_ID } from "../../../constants";
import { sendMail } from "../../../ApiReq/mails";
import Swal from 'sweetalert2'

export default function RegisterFormUser(){
    const [newUser, setNewuser]= useState({
        email:"",
        username:"",
        name:"",
        lastname:"",
        password:"",
        confirmPassword:""
    })
    const [checked, setChecked]= useState(false)
    const [error, setError]= useState({})

    const userData= useSelector((state) => {return state.userReducer.users})

    function handleChange(e){
        const {value, name}=e.target
        setNewuser({
            ...newUser,
            [name]:value
        })

        if (name==="email"){
            if(userData.find(user=> user.email===value)){
                setError({...error, "email" : "El email ya esta en uso"})
            }
            else setError({...error, "email" : ""})
        }
        if (name==="username"){
            if(userData.find(user=> user.username===value)){
                setError({...error, "username" : "El usuario ya existe"})
            }
            else setError({...error, "username" : ""})
        }
        if (name==="confirmPassword"){
            if(newUser.password && value!==newUser.password){
                setError({...error, "password":"Las contraseñas no coinciden."})
            }
            else setError({...error, "password":""})
        }
        if (name==="password"){
            if(newUser.confirmPassword && value!==newUser.confirmPassword){
                setError({...error, "password":"Las contraseñas no coinciden."})
            }
            else setError({...error, "password":""})
        }
    }

    function handleChangeCheckbox(e){
        setChecked(!checked)    
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(!checked) {
            Swal.fire({
                icon: 'warning',
                title: 'Acepta los terminos primero',
                showConfirmButton: false,
                timer: 1500
            })
            return false
        }
        if(validate(newUser, setError, userData)){
            setNewuser({
                email:"",
                username:"",
                name:"",
                lastname:"",
                password:"",
                confirmPassword:""
            })
            setError({})
            e.target.reset();
            createUser(newUser)
            sendMail('welcome',{
                username:newUser.username,
                email: newUser.email})
            Swal.fire({
                icon: 'success',
                title: 'Cuenta creada!',
                confirmButtonText: 'Iniciar sesión',
                allowOutsideClick:false
            }).then(function() {
                window.location = "/ingresar";
            })
            createUser(newUser)
            
        }
    }
    
    const responseGoogle =async(res)=>{
        const endUN = res.profileObj.email.indexOf('@')
        if(userData.find(user=> user.email===res.profileObj.email)){
            Swal.fire({
                icon: 'warning',
                title: "Esa cuenta de google ya esta registrada",
                showConfirmButton: false,
                timer: 1500
            })
            return false
        }
        if(!checked) {
            Swal.fire({
                icon: 'warning',
                title: 'Acepta los terminos primero',
                showConfirmButton: false,
                timer: 1500
            })
            return false
        }
        try{
            createUser({
                username:res.profileObj.email.slice(0, endUN),
                name: res.profileObj.givenName,
                lastname: res.profileObj.familyName,
                password:res.profileObj.googleId,
                confirmPassword:res.profileObj.googleId,
                email: res.profileObj.email,
                googleAccount: true
            })
            sendMail('welcome',{
                username:res.profileObj.email.slice(0, endUN),
                email:res.profileObj.email})
            await Swal.fire({
                icon: 'success',
                title: 'Cuenta creada!',
                confirmButtonText: 'Iniciar sesión',
                allowOutsideClick:false
            }).then(function() {
                window.location = "/ingresar";
            })
        }
        catch(e){
            console.log(e)
        }
    }
    
    
    return (
        <div className="col-3-4@xl col-3-4@lg col-5-6@md col-1-1@sm padd-md bg-color-light border-radius-sm border-color-extra4-a20 shadow-lg">
            <form onSubmit={handleSubmit} autoComplete="off">
                {/* Titulo */}
                <div className="col-1-1@xl padd-md border-bottom-color-main mb-2">
                    <h2 className="text-2xl">
                        Información personal - Cliente
                    </h2>
                </div>
                {/* Correo Electrónico */}
                <div className="col-1-2@xl col-1-2@lg col-1-2@md col-1-1@sm col-1-1@xs px-2">
                    <div className="uk-flex uk-flex-column">
                        <label htmlFor="email" className="p-2">
                            Correo Electrónico
                        </label>
                        <input
                            className="uk-input width-100 border-radius-sm"
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="off"
                            placeholder="Ingresa tu email"
                            onChange={handleChange}
                            required
                        />
                        {
                            error.email ? <span className="uk-alert-danger px-2">{error.email}</span> : <span>&nbsp;</span>
                        }
                    </div>
                </div>
                {/* Nombre de Usuario */}
                <div className="col-1-2@xl col-1-2@lg col-1-2@md col-1-1@sm col-1-1@xs px-2">
                    <div className="uk-flex uk-flex-column">
                        <label htmlFor="username" className="p-2">
                            Nombre de usuario
                        </label>
                        <input
                            className="uk-input width-100 border-radius-sm"
                            type="text"
                            name="username"
                            id="username"
                            autoComplete="off"
                            placeholder="Ingresa tu nombre de usuario" 
                            onChange={handleChange}
                            required
                        />
                        {
                            error.username ? <span className="uk-alert-danger px-2">{error.username}</span> : <span>&nbsp;</span>
                        }
                    </div>
                </div>
                {/* Nombres */}
                <div className="col-1-2@xl col-1-2@lg col-1-2@md col-1-1@sm col-1-1@xs px-2">
                    <div className="uk-flex uk-flex-column">
                        <label htmlFor="name" className="p-2">
                            Nombre
                        </label>
                        <input
                            className="uk-input width-100 border-radius-sm"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Ingresa tu nombre"
                            autoComplete="off"
                            onChange={handleChange}
                            required
                        />
                        {
                            error.name ? <span className="uk-alert-danger px-2">{error.name}</span> : <span>&nbsp;</span>
                        }
                    </div>
                </div>
                {/* Apellidos */}
                <div className="col-1-2@xl col-1-2@lg col-1-2@md col-1-1@sm col-1-1@xs px-2">
                    <div className="uk-flex uk-flex-column">
                        <label htmlFor="lastname" className="p-2">
                            Apellido
                        </label>
                        <input
                            className="uk-input width-100 border-radius-sm"
                            type="text"
                            name="lastname"
                            id="lastname"
                            placeholder="Ingresa tu apellido" 
                            onChange={handleChange}
                            required
                        />
                        {
                            error.lastname ? <span className="uk-alert-danger px-2">{error.lastname}</span> : <span>&nbsp;</span>
                        }
                    </div>
                </div>
                {/* Contraseña */}
                <div className="col-1-2@xl col-1-2@lg col-1-2@md col-1-1@sm col-1-1@xs px-2">
                    <div className="uk-flex uk-flex-column">
                        <label htmlFor="password" className="p-2">
                            Contraseña - (mínimo 6 caracteres)
                        </label>
                        <input
                            className="uk-input width-100 border-radius-sm"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Ingresa tu contraseña" 
                            onChange={handleChange}
                            required
                        />
                        <span>&nbsp;</span>
                    </div>
                </div>
                {/* Contraseña Confirmación */}
                <div className="col-1-2@xl col-1-2@lg col-1-2@md col-1-1@sm col-1-1@xs px-2">
                    <div className="uk-flex uk-flex-column">
                        <label htmlFor="confirmPassword" className="p-2">
                            Confirmar Contraseña
                        </label>
                        <input
                            className="uk-input width-100 border-radius-sm"
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="Confirma tu contraseña" 
                            onChange={handleChange}
                            required
                        />
                        {
                            error.password ? <span className="uk-alert-danger px-2">{error.password}</span> : <span>&nbsp;</span>
                        }
                    </div>
                </div>
                {/* Términos */}
                <div className="col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm col-1-1@xs padd-md flex-center">
                <label  htmlFor="acceptT" 
                            className="p-2">Acepto los <a href ="/terminos-y-condiciones" target="_blank">términos y condiciones del servicio</a></label>
                    <input
                        className="uk-checkbox mrg-xs-t"
                        type="checkbox"
                        name="acceptT"
                        id="acceptT"
                        checked={checked}
                        onChange={handleChangeCheckbox}
                    />
                </div>
                {/* Botones */}
                <div className="col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm col-1-1@xs padd-md">
                    <div>
                        <input
                            className="uk-button uk-button-danger border-radius-sm action action-user-register-submit"
                            type="submit"
                            value="Registrarse"
                        />
                    </div>
                    <div>
                        <GoogleLogin
                            clientId={GOOGLE_ID}
                            buttonText="Registrarse con Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            className="width-100 mrg-lg-t flex-center"
                        />
                    </div>
                </div>
            </form>
            
        </div>
    )
}
