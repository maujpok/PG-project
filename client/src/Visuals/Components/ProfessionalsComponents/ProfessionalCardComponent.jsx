import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../Controllers/actions/cartActions'
import BigButton from '../BigButton'
import ProfessionalCardData from './ProfessionalCardData'
import ProfessionalCardInfo from './ProfessionalCardInfo'
//import SimilarProfessionals from './SimilarProfessionals'



function ProfessionalCardComponent({img, likes, dislikes, sessions, biography, professionalData, schedule, data, name}) {
  
    const login = useSelector(state => state.sessionReducer.status.token)
  
    const [hireform, setHire]= useState(false)
    const [appointment, setAppo]= useState()
    const dispatch= useDispatch()
    
    const contratado = (e)=>{
        e.preventDefault()
        dispatch(addToCart({
            name:name,
            appointment:appointment
        }))
        e.target.reset();
        alert('Profesional Contratado!')
    }
    const showForm = ()=>{setHire(!hireform)}

    const handleChange= (e)=>{
        const {value, name}=e.target
        setAppo({
            ...appointment,
            [name]:value
        })
    }
    
    return (
        <div className='mx-5 p-5 flex flex-col'>
            <div className='flex'>
                <div className='w-2/6'>
                    <ProfessionalCardData   img={img}
                                            likes={likes}
                                            dislikes={dislikes}
                                            sessions={sessions}
                            />
                </div>
                <div className='w-4/6 ml-10'>
                    <ProfessionalCardInfo   biography={biography}
                                            professionalData={professionalData}
                                            schedule={schedule}
                            />
                </div>
            </div>
            <div className='mt-10'>
                {login && <BigButton  onClickFunction={showForm}
                            text='CONTRATAR'
                            cssActive='bg-green-300 w-3/5 p-8 rounded-3xl mt-10 mb-10 text-2xl font-semibold tracking-widest w-4/5 ml-24'
                    />}
                
                {hireform && (<form onSubmit={contratado} className="w-4/5 ml-24">
                    <label htmlFor="meeting-date" className="text-lg">Fecha</label>
                    <input id="meeting-date" type="datetime-local" name="date" onChange={handleChange} className="my-5"/>
                    <label htmlFor="sessions">Cantidad de sesiones (30 min)</label>
                    <input type="number" id="sessions" name="sessions" min="1" max="5" onChange={handleChange} className="my-5"/>
                    <input type="submit" value="Reservar"  className="uk-button uk-button-danger uk-margin"/>
                </form>)}
                {/* <SimilarProfessionals data={data}/> */}

            </div>
        </div>
    )
}

export default ProfessionalCardComponent
