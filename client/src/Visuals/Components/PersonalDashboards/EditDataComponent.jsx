import React from 'react'
import EditInputComponent from './EditInputComponent'
import '../../Assets/css/editData.custom.css'
import PopBtns from '../PopBtns'



function EditDataComponent(props) {

    const divClass = 'border-b-2'
    const labelClass = 'text-lg  tracking-widest font-medium'
    const inputClass = 'bg-gray-100'
    
    
    return (
        <div className='flex'>
            <div className='flex flex-col items-center justify-between h-80 w-96 my-10'>
                {props.userInfo==='personalInfo'&&
                    <div className='flex flex-col h-64 justify-around w-96 max-h-72'>
                        <EditInputComponent
                                    key='#Nombre'
                                    label='Nombre'
                                    inputName='name'
                                    value={props.data.name}
                                    divClass={divClass}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                                    onChange={props.onChange}
                            />
                        <EditInputComponent
                                    key='#Apellido'
                                    label='Apellido'
                                    inputName='lastname'
                                    value={props.data.lastname}
                                    divClass={divClass}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                                    onChange={props.onChange}
                            />
                        <EditInputComponent
                                    key='#Cumpleaños'
                                    label='Cumpleaños'
                                    inputName='birthdate'
                                    value={props.data.birthdate}
                                    type='date'
                                    divClass={divClass}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                                    onChange={props.onChange}
                            />
                    </div>
                }
                {props.userInfo==='professionalInfo' &&
                    <div className='editProfData'>
                        <EditInputComponent
                                    key='Imagen de Perfil'
                                    label='Imagen de Perfil'
                                    inputName='img'
                                    value={props.data.img}
                                    divClass={divClass}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                                    onChange={props.onChange}
                            />
                        <EditInputComponent
                                    key='Titulo'
                                    label='Titulo'
                                    inputName='title'
                                    value={props.data.title}
                                    divClass={divClass}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                                    onChange={props.onChange}
                            />
                        <EditInputComponent
                                    key='Universidad'
                                    label='Universidad'
                                    inputName='institute'
                                    value={props.data.institute}
                                    divClass={divClass}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                                    onChange={props.onChange}
                            />
                        {/* <EditInputComponent
                                    key='Link - Google Meet'
                                    label='Link - Google Meet'
                                    inputName='meetingUrl'
                                    value={props.data.meetingUrl}
                                    divClass={divClass}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                                    onChange={props.onChange}
                            /> */}
                        <EditInputComponent
                                    key='Cuenta Bancaria'
                                    label='Cuenta Bancaria'
                                    inputName='bankAccount'
                                    value={props.data.bankAccount}
                                    divClass={divClass}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                                    onChange={props.onChange}
                            />
                        <EditInputComponent
                                    key='Estado'
                                    label='Estado'
                                    inputName='state'
                                    value={props.data.state}
                                    divClass={divClass}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                                    onChange={props.onChange}
                            />
                        <EditInputComponent
                                    key='Ciudad'
                                    label='Ciudad'
                                    inputName='city'
                                    value={props.data.city}
                                    divClass={divClass}
                                    labelClass={labelClass}
                                    inputClass={inputClass}
                                    onChange={props.onChange}
                            /> 
                    </div>
                }
                <PopBtns    onSuccess={props.onSuccess}
                            onCancel={props.onCancel}
                        />
            </div>
        </div>
    )
}

export default EditDataComponent
