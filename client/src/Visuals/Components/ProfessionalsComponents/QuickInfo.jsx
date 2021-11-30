import React from 'react'
import { FcApproval } from "react-icons/fc";
import { TiThumbsUp , TiThumbsDown } from "react-icons/ti";
import ImageComponent from "../ImageComponent";
import { FaRegMoneyBillAlt } from "react-icons/fa";


export default function QuickInfo({data}) {

    //const {cost, img, likes, dislikes, country, isProfessional, session, isVerified} = data;

    return (
        <div>
            <div className='flex justify-center padd-md-b font-main text-bold font-xl border-bottom-color-main'>
                <span className='flex items-center justify-center font-xl w-full'
                    ><FaRegMoneyBillAlt className='text-green-500 w-10 mr-2'
                  />{`  ${data.cost}`}<p className='text-green-500 font-normal ml-2'>USD</p>
                </span>
            </div>
            <div className="mrg-lg-t border-radius-sm overflow-hidden">
                <ImageComponent img={data.img} ratio={"ratio-1-1"}/>
            </div>
            
            <div className="text-bold text-center font-lg">{data.country.name}</div>
            <div className="padd-md-tb text-center font-main font-lg">
                {data.isVerified
                ? <span className="flex-center">Usuario Verificado<FcApproval className='font-xl mrg-sm-l'/></span>
                :<span>Usuario no verificado</span>
                }
            </div>
            <div className='flex items-center justify-around'>
                <div className='flex font-lg items-center'>
                    <TiThumbsUp className='font-2x font-color-success mrg-md-r'/>
                    <span className='text-gray-500'>{data.likes}</span>
                </div>
                <div className='flex text-lg items-center'>
                    <TiThumbsDown className='font-2x font-color-danger mrg-md-r'/>
                    <span className='text-gray-500'>{data.dislikes}</span>
                </div>
            </div>
            <div className='mrg-lg-t font-main font-lg flex-bar'>
                {/* <div className='text-bold'>Valoración:</div >
                <span className='text-bold font-color-success'>{(Math.ceil(data.likes/data.dislikes))}</span> */}
            </div>
            <div className='mrg-lg-t font-main font-lg flex-bar'>
                {data.isProfessional &&   
                    <div className='text-bold'>Total de sesiones :</div>
                }
                {data.isProfessional && 
                    <span className='text-bold font-color-success'>{data.session? data.session : 0}</span>
                }
            </div>
        </div>
    )
}
