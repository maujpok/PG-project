import React, {useState} from "react";
import validate from "../../../Tools/validations";
import { createUser } from "../../../ApiReq/users";
import { sendMail } from "../../../ApiReq/mails";
import {useSelector} from "react-redux"
import Swal from 'sweetalert2'

export default function RegisterFormPro(){
    const [newUser, setNewuser]= useState({
        isProfessional:true,
        email:"",
        username:"",
        password:"",
        confirmPassword:"",
        name:"",
        lastname:"",
        telNum1:"",
        category:"",
        professionalRegistration:"",
        country:""
    })
    const [checked, setChecked]= useState(false)
    const [profchecked, setProfchecked]= useState(false)
    const [error, setError]= useState({})

    const userData= useSelector(state => state.userReducer.users)
    const categorylist= useSelector(state => state.constantInfoReducer.categories)
    const countries = useSelector(state=>state.constantInfoReducer.countries)

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
    function handleChangeCheckboxprof(e){
        setProfchecked(!profchecked)
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
                password:"",
                confirmPassword:"",
                name:"",
                lastname:"",
                telNum1:"",
                telNum2:"",
                professionalRegistration:"",
            })
            setError({})
            e.target.reset();
            
            createUser(newUser)
            sendMail('welcome',{
                username:newUser.username,
                email:newUser.email})
            Swal.fire({
                icon: 'success',
                title: 'Cuenta creada!',
                confirmButtonText: 'Iniciar sesión',
                allowOutsideClick:false
            }).then(function() {
                window.location = "/ingresar";
            })
        }
      }
    
    return (
        <div className="col-3-4@xl col-3-4@lg col-5-6@md col-1-1@sm padd-md bg-color-light border-radius-sm border-color-extra4-a20 shadow-lg">
            <form onSubmit={handleSubmit} autoComplete="off">
                {/* Titulo */}
                <div className="col-1-1@xl padd-md border-bottom-color-main mb-2">
                    <h2 className="text-2xl">
                        Información personal - Profesional
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
                            placeholder="Ingresa tu nombre de usuario" 
                            onChange={handleChange}
                            required
                        />
                        {
                            error.username ? <span className="uk-alert-danger px-2">{error.username}</span> : <span>&nbsp;</span>
                        }
                    </div>
                </div>
                {/* Contraseña */}
                <div className="col-1-2@xl col-1-2@lg col-1-2@md col-1-1@sm col-1-1@xs px-2">
                    <div className="uk-flex uk-flex-column">
                        <label htmlFor="password" className="p-2"> Contraseña - (mínimo 6 caracteres)</label>
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
                            Confirmar contraseña
                        </label>
                        <input
                            className="uk-input width-100 border-radius-sm"
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="Confirmar contraseña" 
                            onChange={handleChange}
                            required
                        />
                        {
                            error.password ? <span className="uk-alert-danger px-2">{error.password}</span> : <span>&nbsp;</span>
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
                {/* Teléfono */}
                <div className="col-1-2@xl col-1-2@lg col-1-2@md col-1-1@sm col-1-1@xs px-2">
                    <div className="uk-flex uk-flex-column">
                        <label htmlFor="telNum1" className="p-2">
                            Teléfono
                        </label>
                        <input
                            className="uk-input width-100 border-radius-sm"
                            type="tel"
                            name="telNum1"
                            id="telNum1"
                            placeholder="Ingresa tu teléfono" 
                            onChange={handleChange}
                            required
                        />
                        {
                            error.phone ? <span className="uk-alert-danger px-2">{error.phone}</span> : <span>&nbsp;</span>
                        }
                    </div>
                </div>
                {/* Categoría */}
                <div className="col-1-2@xl col-1-2@lg col-1-2@md col-1-1@sm col-1-1@xs px-2">
                    <div className="uk-flex uk-flex-column">
                        <label htmlFor="category-choice" className="p-2">
                            Categoría
                        </label>
                        <select
                            name="category"
                            id="category"
                            className="uk-select width-100 border-radius-sm"
                            onChange={handleChange}
                            required
                        >
                            <option value="">- Seleccionar profesión -</option>
                            {   
                                categorylist.map(e=>{
                                    return(
                                        <option name={e.name} key={e._id} value={e._id}>
                                            {e.name}
                                        </option>
                                    )
                                })
                            }
                        </select>
                        <span>&nbsp;</span>
                    </div>
                </div>
                {/* País */}
                <div className="col-1-1@xl col-1-1@lg col-1-2@md col-1-1@sm col-1-1@xs px-2">
                    <div className="uk-flex uk-flex-column">
                        <label htmlFor="country" className="p-2">
                            País
                        </label>
                        <select
                            name="country"
                            id="country"
                            className="uk-select width-100 border-radius-sm"
                            onChange={handleChange}
                            required
                        >
                            <option value="">- Seleccionar país -</option>
                                {
                                    countries.map(e=>{
                                        return(
                                            <option name={e.name} key={e._id} value={e._id}>
                                                {e.name}
                                            </option>
                                        )
                                    })
                                }
                        </select>
                    </div>
                </div>
                {/* Certificación */}
                <div className="col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm col-1-1@xs px-2 mt-2 flex-center">
                    <label htmlFor="prof-check" className="uk-padding-right p-2">
                        Eres profesional certificado?
                    </label>
                    <input
                        className="uk-checkbox uk-margin-left"
                        type="checkbox"
                        name="prof-check"
                        checked={profchecked}
                        onChange={handleChangeCheckboxprof}
                    />
                </div>
                 {/* Numero de Certificación */}
                    {
                        profchecked &&  <div className="col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm col-1-1@xs px-2">
                                            <div className="uk-flex uk-flex-column">
                                                <label className="p-2">
                                                    Número de Matrícula
                                                </label>
                                                <input 
                                                    className="uk-input width-100 border-radius-sm"
                                                    type="text"
                                                    name="professionalRegistration"
                                                    placeholder="Nro de matrícula" 
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                    }
                {/* Términos */}
                <div className="col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm col-1-1@xs padd-md flex-center">
                <label  htmlFor="acceptT" 
                            className="p-2">Acepto los <a href ="/terminos-y-condiciones" target="_blank">términos y condiciones del servicio</a></label>
                    <input
                        className="uk-checkbox uk-margin-left"
                        type="checkbox"
                        name="acceptT"
                        checked={checked}
                        onChange={handleChangeCheckbox}
                    />
                </div>
                {/* Botones */}
                <div className="col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm col-1-1@xs padd-md">
                    <input
                        className="uk-button width-100 border-radius-sm action action-user-register-submit"
                        type="submit"
                        value="Registrarse"
                    />
                </div>
            </form>
        </div>
    )
    
}