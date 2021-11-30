import React , { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useLocation } from 'react-router'
import { checkLoginAction, cleanLoginCheck } from '../../../Controllers/actions/loginAction'
import { getAllUsers } from '../../../Controllers/actions/userActions'
import LoginFormComponents from './LoginFormComponents'
import GoogleLogin from 'react-google-login'
import { GOOGLE_ID } from '../../../constants'
import { Link } from 'react-router-dom'
import PopContainer from "../PopContainer";
import LoginCreateAccount from './LoginCreateAccount'
import { createUser } from '../../../ApiReq/users'
import { sendMail } from '../../../ApiReq/mails'
import Swal from 'sweetalert2'



function LoginComponentsContainer() {

    //funcion que llame el listado de usernames y mails
    const dispatch = useDispatch()

    const {search} = useLocation()
    const query= new URLSearchParams(search)
    const usernameQ = query.get('username');
    const passwordQ = query.get('helper')

    useEffect(() => {
        dispatch(getAllUsers())
        window.scrollTo(0, 0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const LogError = useSelector(state =>  state.sessionReducer.status.error)
    useEffect(() => {
        if(LogError){
            setShowErrorText(true)
        }
    }, [LogError])

    const users = useSelector(state => state.userReducer.users)
    const userNames = users.map(elem=>elem.username)

    const [showErrorText, setShowErrorText] = useState(false)
    const [userIndex, setUserIndex] = useState('')
    const [userFind, setUserFind] = useState('')
    const [passVerified, setPassVerified] = useState('')
    const [UserCanLog, setUserCanLog] = useState(true)
    const [passError, setPassError] = useState(false)
    const [register, setRegister] = useState(false)
    const [checked, setChecked] = useState(false)
    const [googleData, setGoogleData] = useState({})
    const [usernameField, setUsernameField] = useState('')
    const [passField, setPassField] = useState('')
    
    const [errors, setErrors] = useState({
        username:'have some error',
        password:'have some error'
    })
    
    const [userFields, setuserFields] = useState({
        username:'',
        password:''
    })

    // FUNCTIONS ///////////////
    
    const handleErrors=()=>{
        if(userFind.length>0){
            setErrors({
                ...errors, username:'' 
            })
            return;
        }
        if(passVerified.length>0){
            setErrors({
                ...errors, password:'' 
            })
            setPassError(false)
            return
        }
    }

    const cleanErrors=(prop)=>{
        setErrors({
            ...errors, [prop]:''
        })
    }
    const checkErrors=()=>{
        if(errors.username.length>0){
            setUserCanLog(true)
        }
        if(errors.password.length>0){
            setUserCanLog(true)
        }
        if(!errors.username.length && !errors.password.length){
            setUserCanLog(false)
        }
        if(!errors.password.length && !errors.username.length){
            setUserCanLog(false)
        }
    }
    
    const handleFields=(e)=>{
        if(e.target.name==='username'){
            setuserFields({
                ...userFields, username:e.target.value
                })
                if(userNames.includes(e.target.value)){
                    setUserIndex(userNames.indexOf(e.target.value))
                    setUserFind('User Coincidence')
                    cleanErrors('username')
                    checkErrors()
                    return
                }
                if(!userNames.includes(e.target.value)){
                    setUserIndex({})
                    setUserFind('')
                    handleErrors(e.target.name)
                    setUserCanLog(true)
                }
                userFind.length===0 && setErrors({
                    ...errors,
                    username:'have some error'
                })
            return
        }
        if(e.target.name==='password'){
            if(e.target.value.length>=5){
                setuserFields({
                    ...userFields, password:e.target.value
                })
                setPassVerified('Password Verified')
                cleanErrors('password')
                setShowErrorText(false)
                checkErrors()
            }else if(e.target.value.length<=5){
                setUserCanLog(true)
                setPassVerified('')
                handleErrors(e.target.name)
                setuserFields({
                    ...userFields, password:''
                })
                setErrors({
                    ...errors,
                    password:'have some error'
                })
            }
            return
        }
    }

    const UserLog = useSelector(state=> state.sessionReducer.status)
    
    const checkLog=()=>{
        if(!UserLog.error && UserLog.token.length){
            setShowErrorText(false)
        }else if(UserLog.error){
            setShowErrorText(true)
            setUserCanLog(true)
            setPassError(true)
            setuserFields({
                ...userFields,
                password:''
            })
            dispatch(cleanLoginCheck())
        }
    }

    const goAlert=()=>{
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
            })
            
            Toast.fire({
                icon: 'success',
                title: 'Ingreso Exitoso'
            })
            return true
    }

    const logIn = ()=>{
        dispatch(checkLoginAction({username:userNames[userIndex], password: userFields.password}))
        setShowErrorText(false)
        checkLog()
    }

    const responseGoogle =(res)=>{
        setGoogleData({...res.profileObj})
        const endUN = res.profileObj.email?.indexOf('@')
        if(!userNames.includes(res.profileObj.email.slice(0, endUN))){
            setRegister(!register)
        }
        if(userNames.includes(res.profileObj.email.slice(0, endUN))){
            setGoogleData({})
            setShowErrorText(false)
            dispatch(checkLoginAction({username:res.profileObj.email.slice(0, endUN), password:res.profileObj.googleId}))
        }
    }

    const createAccountGoogle = async()=>{
        if(!checked) {
            Swal.fire({
                icon: 'warning',
                title: 'Acepta los terminos primero',
                showConfirmButton: false,
                timer: 1500
            })
            return false
        }
        if(checked){
            try{
                const endUN = googleData.email.indexOf('@')
                createUser({
                    username:googleData.email.slice(0, endUN),
                    name: googleData.givenName,
                    lastname: googleData.familyName,
                    password:googleData.googleId,
                    confirmPassword:googleData.googleId,
                    email: googleData.email,
                    googleAccount: true
                })
                sendMail('welcome', {
                    username:googleData.email.slice(0, endUN),
                    email:googleData.email
                });
                await Swal.fire({
                    icon: 'success',
                    title: 'Cuenta creada!',
                    showConfirmButton: false,
                    timer: 1500
                })
                dispatch(checkLoginAction({username:googleData.email.slice(0, endUN), password:googleData.googleId}))
                setGoogleData({})
                setShowErrorText(false)
                //window.location.reload(false);
            }
            catch(e){
                console.log(e)
            }
        }
    }
    const helperLogin=(username, password)=>{
        !userFields.username && setuserFields({
            username,
            password
        })
        errors.username&&setErrors({
            ...errors,
            username:''
        })
        errors.password&&setErrors({
            ...errors,
            password:''
        })
        dispatch(checkLoginAction({username, password}))
    }
    (usernameQ && passwordQ) && helperLogin(usernameQ, passwordQ);

    const changeCheck=()=>{
        setChecked(!checked);
    }

    const changeRegisterStatus=()=>{
        setRegister(false);
    }
    const modalDiv=`bg-white mt-2 h-2/5 w-2/5 flex flex-col items-center 
                    justify-center rounded-lg shadow-lg	`

    return (
        <div className='flex flex-col items-center justify-start my-10 min-h-screen sm:w-96 md:mx-auto '>
            <PopContainer   trigger={register}
                            principalDiv={modalDiv}
                            children={<LoginCreateAccount 
                                            checked={checked}
                                            checkTerms={changeCheck}
                                            onSuccess={createAccountGoogle}
                                            onCancel={changeRegisterStatus}
                                        />}
                />
            {((UserLog.token && UserLog.token.length>0) && goAlert()) ? 
                <Redirect to={`/miperfil/${UserLog.username}`}/>
                    :
            ( UserLog!=='Correcto') &&
                <LoginFormComponents    handleFields={handleFields}
                                        logIn={logIn}
                                        tagUser={userFind}
                                        tagPass={passVerified}
                                        UserCanLog={UserCanLog}
                                        passError={passError}
                                        showError={showErrorText}
                                        usernameField={usernameField}
                                        setUsernameField={setUsernameField}
                                        passField={passField}
                                        setPassField={setPassField}
                                    />
            }
            <br/>
            <GoogleLogin
                        clientId={GOOGLE_ID}
                        buttonText="Iniciar Sesion"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
            <div className='flex flex-col items-center justify-center mt-6 text-2xl font-semibold pt-4'>
                <Link   className={`text-red-500 hover:no-underline hover:text-red-700 duration-700`} 
                        to={'/registro'}>Crea tu cuenta!</Link>
            </div>
            
        </div>
    )
}

export default LoginComponentsContainer
