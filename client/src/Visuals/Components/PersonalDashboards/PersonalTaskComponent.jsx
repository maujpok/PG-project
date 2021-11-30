import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFeeds, postFeed } from '../../../Controllers/actions/userActions'
import CreateReview from '../CreateReview'
import PopContainer from '../PopContainer'

function PersonalTaskComponent({isProfessional, userId, personalName}) {
    const dispatch = useDispatch()
    const status = useSelector(state=>state.sessionReducer.status)
    const appointments = useSelector(state => state.sessionReducer.appointments)
    const [feedback, setFeedback] = useState(false)
    const feedbacks = useSelector(state => state.sessionReducer.feedbacks)
    const [professionalIdBtn, setprofessionalIdBtn] = useState('')
    const appoimentSort = appointments.sort((a,b)=>Number(a.day)-Number(b.day))

    const today = new Date()
    const date = today.getDate() + '-' + ( today.getMonth() + 1 ) + '-' + today.getFullYear();
    const dateSplit=date.split('-').reverse().join('')

    // const hour = today.getHours();
    // const minutes = today.getMinutes();
    // const fakeDate='20211120';

    const meetAvalaible='text-red-500 text-bold hover:no-underline hover:font-gray-500'
    const meetNoAvalaible='hidden text-gray-300 text-bold hover:no-underline cursor-not-allowed hover:text-gray-300 '

    useEffect(() => {
        dispatch(getFeeds(userId, '', status.token))    
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const sendFeedback=({text, score})=>{
        setFeedback(false)
        dispatch(postFeed({text, score, customerId: status.id, professionalId:professionalIdBtn} ,status.token))
    }

    return ( 
        <div className="padd-lg custom-scroll">
            <div className='padd-md-b font-main text-bold text-center- font-xl border-bottom-color-main'>
                Agenda
            </div>
            <div className="height-50vh overflow-y padd-md-r">
                {appoimentSort && appoimentSort?.map((elem,index)=>{
                    return  <div className='bg-color-extra4-a20 mrg-lg-t padd-lg border-color-dark-a20 border-radius-sm' key={index}>
                                <span className='font-bold text-lg'>{elem.dates[0].datefull.slice(0,-11)}</span>
                                {isProfessional?<p className='pb-2 border-b border-gray-200'>{`Cita con ${elem.customerId.name} ${elem.customerId.lastname}`}</p>:elem.description}
                                {elem.dates && elem.dates?.map((intern, index)=>{
                                return (
                                    <div className='flex flex-col' key={index}>
                                            <div className='flex items-center justify-between h-10'>
                                                <p key={index} className='flex'><span className='mr-4'>Hora :</span>{intern.datefull.slice(-5)}</p>
                                                <a  href={`/reunion/latam-exponential-${elem.professionalId._id}/${personalName}`} 
                                                
                                                rel="noreferrer"
                                                className={ elem.day===dateSplit?
                                                    meetAvalaible
                                                    :meetNoAvalaible
                                                }
                                                >Conectarse</a>
                                            </div>
                                        
                                    </div>
                                )})}
                                {feedbacks.filter(item=>item.professionalId._id===elem.professionalId._id).length===0 ?
                                    <button className={(elem.professionalId._id!==userId && elem.day===dateSplit) ?
                                        'w-full bg-white border-2 border-red-500 rounded-lg mt-2 p-1':'hidden'}
                                                onClick={()=>{
                                                    setFeedback(true)
                                                    setprofessionalIdBtn(elem.professionalId._id)
                                                }}
                                        >Calificar Profesional</button>
                                    :
                                    <button className={(elem.professionalId._id!==userId && elem.day===dateSplit) ?
                                        'w-full bg-white border-2 border-red-500 rounded-lg mt-2 p-1':'hidden'}
                                                onClick={()=>{
                                                    setFeedback(true)
                                                    setprofessionalIdBtn(elem.professionalId._id)
                                                }}
                                        >Editar Feedback</button>
                                    }
                            </div>
                })}
            </div>
            <PopContainer   trigger={feedback}
                            children={<CreateReview
                                    onSuccess={sendFeedback}
                                    onCancel={()=>setFeedback(false)}
                            />}
                />
        </div>
    )
}

export default PersonalTaskComponent
