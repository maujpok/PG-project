import React, { useState } from 'react'
import { FcCheckmark, FcCancel } from "react-icons/fc";


function ProfessionalCardInfo({biography, professionalData, schedule}) {
    
    const [proInfo, setproInfo] = useState('bio')
    
    
    const changeState = (e)=>{
        setproInfo(e.target.name)
    }
    
    const bioclass = 'text-gray-500 font-semibold flex items-start justify-center text-xl'
    const profileclass = 'text-gray-800 font-bold text-xl flex justify-start mb-2'
    const profileP='text-gray-500 font-semibold text-lg ml-4'
    const scheduleclass = 'flex justify-start items-center text-green-600 text-2xl font-semibold mb-1' 

    return (
        <div className='flex flex-col'>
            <div className=' flex items-center justify-around border-b-8 border-double border-red-300 pt-2 pb-2'>
                <button name='bio' 
                        className='bg-gray-300 p-1 font-medium rounded-md h-10 w-24'
                        onClick={changeState}
                    >Biography</button>
                <button name='profile' 
                        className='bg-gray-300 p-1 font-medium rounded-md h-10 w-36'
                        onClick={changeState}
                    >Perfil Laboral</button>
                <button name='schedule'
                        className='bg-gray-300 p-1 font-medium rounded-md h-10 w-24'
                        onClick={changeState}
                    >Agenda</button>
            </div>
            <div className='h-72 flex flex-col p-5'>
                {proInfo==='bio' && <span className={bioclass}>{biography}</span>}
                {proInfo==='profile' && professionalData?.map((elem, index)=>{
                    return <span key={index} className={profileclass}>{elem.name}<p className={profileP}>{elem.text}</p>{elem.verified?<FcCheckmark class='font-xl'/>:''}</span>
                })}
                {/* {proInfo==='schedule' && <Schedule />} */}
                {
                    proInfo==='schedule' && schedule?.map((elem, index)=>{
                    return <span key={index} className={scheduleclass}><p>{elem.available?<FcCheckmark className='mr-4'/>:<FcCancel class='mr-4'/>}</p>{elem.date}</span>
                })}
                {/* {
                    proInfo === 'schedule' &&
                    <div>
                    <div class="calendly-inline-widget" data-url="https://calendly.com/ft17a-g4?primary_color=7f00ff" style="min-width:320px;height:630px;"></div>
                    <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                    </div>
                } */}
            </div>
        </div>
    )
}

export default ProfessionalCardInfo
