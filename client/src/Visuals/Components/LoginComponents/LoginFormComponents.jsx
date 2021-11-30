import React, {useState} from 'react'
import BigButton from '../BigButton'
import LoginInputComponent from './LoginInputComponent'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function LoginFormComponents({handleFields, logIn, tagUser, tagPass, UserCanLog, passError, showError, usernameField, setUsernameField, passField, setPassField}) {
    
    const [passEye, setpassEye] = useState(false)

    const classInput='bg-gray-100 border-2 border-gray-300 px-5 py-2 '
    const classDanger='ring-4 ring-red-500 bg-gray-100 px-5 py-2'
    const classLabel='font-xl '
    const classDiv='flex flex-col items-start justify-between  w-96 h-24 '
    const classPass = 'flex items-center justify-between  w-96 h-24' 
    const classBtnPass = 'font-xl' 
    const textPassShow = <FaRegEye/>
    const textPassHide = <FaRegEyeSlash/>

    const classLogBtn=`bg-primary px-8 py-4 w-96 mt-5 rounded-xl font-semibold 
                        text-3xl uppercase tracking-widest text-gray-100 
                        cursor-pointer hover:bg-red-900 duration-1000
                        border-2 border-gray-200 shadow-xl `

    const classNoLogBtn=`bg-gray-200 px-8 py-4 w-96 mt-5 rounded-xl font-semibold 
                        text-3xl uppercase tracking-widest text-gray-100 
                        shadow-xl text-white cursor-not-allowed `

    const wrogPassClass = `flex items-center justify-center text-2xl mt-4 
                            duration-700 text-red-500 text-semibold tracking-widest`

    const textLog='text-white'
    const textNoLog='text-gray-400'

    //Clean Field
    const handleClickCheck=()=>{
        setUsernameField('')
        setPassField('')
        logIn()
    }

    const handleShowPass = ()=>{
        setpassEye(!passEye)
    }

    const LogError = useSelector(state =>  state.sessionReducer.status.error)

    const keyPressLogin=(e)=>{
        e.keyCode===13 && handleClickCheck()
    }

    return (
        <div className='flex flex-col p-10 h-96 justify-around items-center'>
            <LoginInputComponent    handleChange={handleFields} 
                                    text={'Nombre de Usuario'} 
                                    name='username'
                                    type={'text'}
                                    placeholder='Ingrese su Nombre de Usuario'
                                    classInput={tagUser?classInput:classDanger}
                                    classLabel={classLabel}
                                    classDiv={classDiv}
                                    inputField={usernameField}
                                    setInputField={setUsernameField}
            />
            
            
            <LoginInputComponent    handleChange={handleFields}
                                    text={'Ingrese su Contraseña'} 
                                    name={'password'}
                                    type={passEye?'text':'password'}
                                    placeholder={'Ingrese su Contraseña'}
                                    classInput={tagPass || passError ?classInput:classDanger}
                                    classLabel={classLabel}
                                    classDiv={classDiv}
                                    classPass={classPass}
                                    handleShowPass={handleShowPass}
                                    textPassBtn={passEye?textPassHide:textPassShow}
                                    classBtnPass={classBtnPass}
                                    inputField={passField}
                                    setInputField={setPassField}
                                    onkeypress={keyPressLogin}
            />
            
            {(showError===true && LogError) &&
                <span className={wrogPassClass}>Contraseña incorrecta</span>
            }
            <BigButton  disactive={UserCanLog} 
                        onClickFunction={handleClickCheck}
                        type='submit'
                        text={'Ingresar'} 
                        cssActive={classLogBtn}
                        cssDisactive={classNoLogBtn}
                        textActive={textLog}
                        textDisactive={textNoLog}
                        />
            
            <Link to='/resetear'  className='mt-4 text-blue-600 font-black'>
                <span>Olvidé mi contraseña</span>
            </Link>
        </div>
    )
}

export default LoginFormComponents