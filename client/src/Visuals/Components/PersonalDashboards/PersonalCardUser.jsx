import React, { useEffect, useState } from 'react'
import { FcApproval } from "react-icons/fc";
import { TiThumbsUp , TiThumbsDown } from "react-icons/ti";
import ImageComponent from "../ImageComponent";


function PersonalCardUser({img, likes, dislikes, sessions, isVerified, professional}) {

    const [random, setRandom] = useState()

    useEffect(() => setRandom(Math.ceil(Math.random()*10)) ,[])

    return (
        <div>
            <div className='padd-md-b font-main text-bold text-center- font-xl border-bottom-color-main'>
                Resumen
            </div>
            <div className="mrg-lg-t border-radius-sm overflow-hidden">
                <ImageComponent img={img} ratio={"ratio-1-1"}/>
            </div>
            <div className="padd-md-tb text-center font-main font-lg">
                {isVerified && <span className="flex-center">Usuario Verificado<FcApproval className='font-xl mrg-sm-l'/></span>}
                {!isVerified && <span>Usuario no verificado</span>}
            </div>
            <div className='flex items-center justify-around'>
                <div className='flex font-lg items-center'>
                    <TiThumbsUp className='font-2x font-color-success mrg-md-r'/>
                    <span className='text-gray-500'>{likes}</span>
                </div>
                <div className='flex text-2xl items-center'>
                    <TiThumbsDown className='font-2x font-color-danger mrg-md-r'/>
                    <span>{dislikes}</span>
                </div>
            </div>
            <div className='mrg-lg-t font-main font-lg flex-bar'>
                {professional &&   
                    <div className='text-bold'>Sesiones Completadas:</div>
                }
                {professional && 
                    <span className='text-bold font-color-success'>{ Math.floor(random*1000/(likes>0?likes:50)) /*sessions*/}</span>
                }
            </div>
        </div>
    )
}

export default PersonalCardUser
