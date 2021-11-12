
import React, { useState } from 'react'
import { FaMarker } from "react-icons/fa";
import { useHistory } from 'react-router'
import PopContainer from '../PopContainer';
import EditDataComponent from './EditDataComponent';
import ShowData from './ShowData';
import Swal from 'sweetalert2'
import { updateUserData } from '../../../ApiReq/users';
import { useDispatch, useSelector } from 'react-redux'
import { putUser } from '../../../Controllers/actions/userActions';
import EditPresentation from './EditPresentation';
import FormPassword from './FormPassword';




function PersonalInformationContainer({userData, changeUserState, userInfo, isProf}) {


    const [popState, setPopState] = useState(false)
    const [popOffer, setPopOffer] = useState(false)
    const [popPass, setPopPass] = useState(false)

    const history = useHistory()
    // {
            // CONTROL 
            //      isProfessional,
            //      isAdmin,
            //      isActive, CORREO PERSONAL 
            //      isVerified, PROFESIONAL VERIFICADO
            ///////////////////////////

    const userNormalInfo={
        username : userData.username,
        email : userData.email,
        contraseña: userData.password,
        '':'',
        nombre : userData.name,
        apellido : userData.lastname,
        cumpleaños : userData.birthdate,
    }

    const getValue=(data)=>{
        if(data){
            return{
                profesion: userData.category.name,
                matricula: userData.professionalRegistration,
                titulo : userData.title,
                universidad: userData.institute,
                'cuenta bancaria': userData.bankAccount,
                pais : userData.country.name,
                estado : userData.state,
                ciudad : userData.city,
            }
        } 
        return {msg:'sin datos'}
    }

    const userProfInfo = getValue(userData.isProfessional)

    const [postPersData, setpostPersData] = useState({
        name : userData.name,
        lastname : userData.lastname,
        birthdate : userData.birthdate,
    })

    const [postProfData, setpostProfData] = useState({
        img: userData.img,
        title : userProfInfo.titulo,
        institute: userData.institute,
        bankAccount: userData.bankAccount,
        state : userData.state,
        city : userData.city,
    })

    const handleEditFields=(e)=>{
        switch (e.target.name) {
            case 'name':
                setpostPersData({
                    ...postPersData,
                    name: e.target.value
                })
                break;
            case 'lastname':
                setpostPersData({
                    ...postPersData,
                    lastname: e.target.value
                })
                break;
            case 'birthdate':
                setpostPersData({
                    ...postPersData,
                    birthdate: e.target.value
                })
                break;

            case 'img':
                setpostProfData({
                    ...postProfData,
                    img: e.target.value
                })
                break;
            case 'title':
                setpostProfData({
                    ...postProfData,
                    title: e.target.value
                })
                break;
            case 'institute':
                setpostProfData({
                    ...postProfData,
                    institute: e.target.value
                })
                break;
            case 'bankAccount':
                setpostProfData({
                    ...postProfData,
                    bankAccount: e.target.value
                })
                break;
            case 'state':
                setpostProfData({
                    ...postProfData,
                    state: e.target.value
                })
                break;
            case 'city':
                setpostProfData({
                    ...postProfData,
                    city: e.target.value
                })
                break;
            default:
                break;
        }
    }

    const token = useSelector(state => state.sessionReducer.status.token)
    const dispatch = useDispatch()

    const sendPersData=()=>{
        setPopState(!popState)
        dispatch(putUser(userData.username, {...postPersData, token}))
        Swal.fire(
            'Datos enviados! personal',
            'Pronto vera los cambios efectuados',
            'success'
        )
        history.push(`/miperfil/${userData.username}`)
    }
    const sendProfData=()=>{
        setPopState(!popState)
        dispatch(putUser(userData.username, {...postProfData, token}))
        Swal.fire(
            'Datos enviados!',
            'Pronto vera los cambios efectuados',
            'success'
        )
        history.push(`/miperfil/${userData.username}`)
    }

    const editData=()=>{
        setPopState(!popState)
    }

    const editPass=()=>{
        setPopPass(!popPass)
    }

    const editOffer=()=>{
        setPopOffer(!popOffer)
    }

    /////////////// CLASS ///////////////

    const showDataDiv='mrg-lg-t padd-md-tb border-bottom-color-dark-a20 flex justify-between';
    const showDataSpan='capitalize mr-4 font-bold text-base';
    const showDataP='text-sm font-normal ml-4';

    /////////////// CLASS ///////////////

    return (
        <div className=''>
            <div className='padd-md-b font-main text-bold text-center- font-xl border-bottom-color-main'>
                Información
            </div>
            <div className="mrg-lg-t">
                <button 
                    name='personalInfo' 
                    className={`padd-md-tb padd-lg-lr font-main ${userInfo === 'personalInfo' ? 'user-dashboard-info-tab-active' : 'user-dashboard-info-tab-inactive'}`} 
                    onClick={changeUserState}>
                    Personal
                </button>
                {
                    isProf && 
                    <button 
                        name='professionalInfo'
                        className={`mrg-lg-l padd-md-tb padd-lg-lr font-main ${userInfo === 'professionalInfo' ? 'user-dashboard-info-tab-active' : 'user-dashboard-info-tab-inactive'}`} 
                        onClick={changeUserState}>
                        Profesional
                    </button>
                }
                <PopContainer   trigger={popState}
                                children={<EditDataComponent
                                        onChange={handleEditFields}
                                        onSuccess={userInfo==='personalInfo'?sendPersData:sendProfData}
                                        data={userInfo==='personalInfo'?postPersData:postProfData}
                                        onCancel={editData}
                                        userInfo={userInfo}
                                    />}
                    />
                <PopContainer   trigger={popPass}
                                children={<FormPassword
                                        onSuccess={userInfo==='personalInfo'?sendPersData:sendProfData}
                                        onCancel={editPass}
                                    />}
                    />
                <PopContainer   trigger={popOffer}
                                children={<EditPresentation
                                        onChange={handleEditFields}
                                        onSuccess={userInfo==='personalInfo'?sendPersData:sendProfData}
                                        data={userInfo==='personalInfo'?postPersData:postProfData}
                                        onCancel={editOffer}
                                        userInfo={userInfo}
                                    />}
                    />
            </div>
            <div className='user-dashboard-info-tabs-content border-color-dark-a20 padd-lg'>
                {userInfo==='personalInfo' && 
                    <div className='flex flex-col'>
                        {
                            Object.keys(userNormalInfo)?.map((elem, index)=>{
                                let dateIndex = (!userData.googleAccount && elem==='cumpleaños') ? userNormalInfo[elem].indexOf('T'):0
                                let data = (elem==='cuenta bancaria'|| elem==='contraseña')?'*************':userNormalInfo[elem]
                                let date = (userData.birthdate && elem==='cumpleaños') && userNormalInfo[elem].slice(0, dateIndex)
                                return (
                                        <ShowData   key={index} title={elem} 
                                                        data={elem==='cumpleaños'?date:data}
                                                        divClass={showDataDiv}
                                                        spanClass={showDataSpan} 
                                                        pClass={showDataP}
                                                />
                                        )
                                    })
                                }
                        </div>
                }
                {
                    (isProf && userInfo==='professionalInfo') 
                            && Object.keys(userProfInfo)?.map((elem,index)=>{
                                let data=userProfInfo[elem]
                        return (
                            <ShowData   key={index} title={elem} 
                                            data={data}
                                            divClass={showDataDiv}
                                            spanClass={showDataSpan} 
                                            pClass={showDataP}
                                    />
                                )
                    })
                }
                <div className='flex justify-around'>
                    {!userData.googleAccount && <button
                        className="width-30 mrg-xl-t padd-sm-tb font-sm- border-radius-sm action action-user-dashboard-edit flex items-center justify-center p-4 font-lg"
                        onClick={editData}
                        >Editar Información <span className='ml-6'><FaMarker/></span>
                    </button>}
                    {!userData.googleAccount && <button
                        className="width-30 mrg-xl-t padd-sm-tb font-sm- border-radius-sm action action-user-dashboard-edit flex items-center justify-center p-4 font-lg"
                        onClick={editPass}
                        >Cambiar contraseña<span className='ml-6'><FaMarker/></span>
                    </button>}
                    {userData.isProfessional && <button
                        className="width-30 mrg-xl-t padd-sm-tb font-sm- border-radius-sm action action-user-dashboard-edit flex items-center justify-center p-4 font-lg"
                        onClick={editOffer}
                        >Presentación Profesional<span className='ml-6'><FaMarker/></span>
                    </button>}
                </div>
            </div>            
        </div>
    )
}

export default PersonalInformationContainer
