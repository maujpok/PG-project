import React from 'react'
import { FcGoogle, FcInfo } from "react-icons/fc";

function LoginCreateAccount(props) {


    return (
        <div className={props.principalDiv}>
            <div className='flex flex-col items-center justify-center'>
                <h2 className=' flex text-red-500 text-2xl font-semibold tracking-wider '
                    > Registrate con <FcGoogle className='ml-2'/></h2>
                <div className="mb-10 pt-2 flex items-center justify-center">
                    <label  htmlFor="acceptT" 
                            className="p-2">Acepto los <a href ="/terminos-y-condiciones" target="_blank">términos y condiciones del servicio</a></label>
                            <FcInfo/>    
                    <input  className="uk-checkbox uk-margin-left"  
                            type="checkbox"  
                            name="acceptT" 
                            id="acceptT" 
                            checked={props.checked} 
                            onChange={props.checkTerms}/>
                </div>
            </div>
            <div className='flex justify-around'>
                <button className='w-48 h-10 mr-4 bg-white rounded-xl duration-700
                                    hover:bg-green-500 ring-white bg-opacity-5
                                    ring-4 ring-offset-1 ring-offset-green-500'
                        
                        onClick={props.onSuccess}
                    ><span  className='text-green-500 font-medium tracking-widest 
                                    duration-700 hover:text-white'
                        >Confirmar</span></button>
                <button className='w-48 ml-4 bg-white bg-opacity-5
                                    hover:bg-red-500 rounded-xl duration-700
                                    ring-white ring-4 ring-offset-1 ring-offset-red-500'
                        onClick={props.onCancel}
                    ><span  className='text-red-500 font-medium tracking-widest
                                    duration-700 hover:text-white'
                        >Cancelar</span></button>
            </div>
        </div>
    )
}

export default LoginCreateAccount
