import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { checkPassword } from '../../../ApiReq/users'
import Swal from 'sweetalert2'
import { validPassHard, validPassLength, validPassMedium } from '../../../Tools/regexTest'



function FormPassword(props) {
    const [pass, setPass] = useState('')
    const [passCoincidence, setPassCoincidence] = useState(false)
    const [newPassword, setNewPassword] = useState('')
    const [passObj, setPassObj] = useState({
        password:'',
        newPassword:''
    })
    const [passErrors, setPassErrors] = useState({
        error:true,
        'protección media':false,
        'protección alta':false,
        'más de 8 caracteres':false
    })

    const checkRegex=(value)=>{
        if(validPassLength.test(value)){
            setPassErrors({
                ...passErrors,
                'más de 8 caracteres':true
            });
            (validPassMedium.test(value) && validPassLength.test(value))&&
                setPassErrors({
                    ...passErrors,
                    'protección media': true,
                    'más de 8 caracteres': true
                });
            ((validPassHard.test(value) && passErrors['protección media']) && passErrors['más de 8 caracteres'])&&
                setPassErrors({
                    ...passErrors,
                    error:false,
                    'protección alta':true,
                })
            if(!passErrors.error && !validPassHard.test(value) ){
                setPassErrors({
                    ...passErrors,
                    error:true,
                    'protección media':false,
                    'protección alta':false,
                    'más de 8 caracteres':false
                });
            }
        }
    }

    const handleFieldsPassword=(e)=>{
        e.target.name==='password' && checkRegex(e.target.value);
        setPassObj({
            ...passObj,
            [e.target.name]: e.target.value
        })
    }
    
    const changeStatus=()=>{
        setPassCoincidence(!passCoincidence)
        setNewPassword(passObj.newPassword)
        setPassObj({
            password:'',
            newPassword:''
        })
    }
    
    const check= async()=>{
        if(passObj.newPassword.length>5 && passObj.password===passObj.newPassword){
            Swal.fire({
                    icon: 'success',
                    title: 'Ambas coinciden',
                    showConfirmButton: false,
                    timer: 1000
            })
            changeStatus()
        }
    }
    if(passObj.password.length>5)check();


    const status = useSelector(state => state.sessionReducer.status)

    const handleFields=(e)=>{
        setPass(e.target.value)
    }

    const handleVerified= async(e)=>{
        e.preventDefault()
        const passCheck = await checkPassword({username: status.username, password:pass, token: status.token, newPassword})

        if(passCheck.data){
            Swal.fire({
                icon: 'success',
                title: 'Contraseña cambiada!',
                showConfirmButton: false,
                timer: 1500
            })
            props.onCancel()
            setPass('')
        }
        if(!passCheck.data){
            Swal.fire({
                icon: 'warning',
                title: 'Contraseña incorrecta!',
                showConfirmButton: false,
                timer: 1500
            })
            props.onCancel()
            setPass('')

        }
    }
    const noError = 'my-2 border-l-2 border-green-500 pl-2 font-lg'
    const withError= 'my-2 border-l-2 border-red-500 pl-2 font-lg'
    const inputnoError = 'border-b border-green-500 border-l-2 pl-2 bg-green-100 bg-opacity-50'
    const inputWithError = 'border-b border-red-500 border-l-2 pl-2 bg-red-100'
    
    return passCoincidence?
        (
            <div className='flex flex-col items-start justify-center my-4'>
                <form onSubmit={handleVerified}>
                    <label className=''>
                        <p className='border-b-2 px-2 border-red-500 font-semibold tracking-widest'
                            >Verifica tu antigua contraseña</p>
                    </label>
                    <input  type='password'
                            value={pass}
                            placeholder='Ingresa tu contraseña'
                            onChange={handleFields}
                            autoComplete="off"
                            className='bg-gray-200 p-2 tracking-widest my-4'
                        />
                    <button className={`flex bg-green-500 bg-opacity-75 mt-2 w-full items-center 
                                        justify-center p-2 rounded-lg`}
                            type='submit'
                            >
                        <p className='font-semibold tracking-widest'>Verificar contraseña</p>
                    </button>
                </form>
                    <button className={`flex bg-red-500 bg-opacity-75 mt-2 w-full items-center 
                                        justify-center p-2 rounded-lg`}
                            onClick={props.onCancel}
                            >
                        <p className='font-semibold tracking-widest'>Cancelar</p>
                    </button>
            </div>
        )
            :
        (
            <div className='flex flex-col items-center justify-center m-4'>
                    <div className='flex flex-col'> 
                        <div className='flex flex-col mb-2 pb-2 border-b border-gray-500 items-center'>
                            <h4 className='text-bold font-xl'>La nueva contraseña debe poseer</h4>
                            <p>Mayúsculas, minúsculas, números, y símbolos</p>
                        </div>
                        <form className='p-2 rounded-md'>
                            <label  className=''
                                ><p className={passErrors.error?withError:noError}
                                    >Ingresa la nueva contraseña</p></label>
                            <input  className={passErrors.error?inputWithError:inputnoError}
                                    onChange={handleFieldsPassword}
                                    autoComplete="off"
                                    name='password'
                                    type='password'
                                    placeholder='   Ingresar Contraseña . . . .'
                                ></input>
                            {passErrors.error && 
                                <div>
                                    {(passErrors['protección media'] && !passErrors['protección alta'])?'protección media':''}
                                    {passErrors['protección alta']?'protección alta':''}
                                    {passErrors['más de 8 caracteres']?'':'Debe tener más de 8 caracteres'}
                                </div>}
                                
        {!passErrors.error && <label  className=''
                                ><p className={passCoincidence?noError:withError}
                                >Repite la nueva contraseña</p></label>}
        {!passErrors.error && <input  className={passCoincidence?inputnoError:inputWithError}
                                    onChange={handleFieldsPassword}
                                    autoComplete="off"
                                    name='newPassword'
                                    type='password'
                                    placeholder='   Repetir Contraseña . . . .'
                                ></input>}
                        </form>
                    </div>
                        <button className={`flex bg-green-500 bg-opacity-75 mt-2 w-full items-center 
                                            justify-center p-2 rounded-lg`}
                                onClick={props.onCancel}
                                >
                            <p className='font-semibold tracking-widest'>volver</p>
                        </button>
                </div>
        )
}

export default FormPassword
