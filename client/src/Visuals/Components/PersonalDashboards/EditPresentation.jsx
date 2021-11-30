import React, { useEffect, useState } from 'react'
import Textarea from "@material-tailwind/react/Textarea";
import PopBtns from '../PopBtns';

function EditPresentation(props) {
    const [textarea, setTextarea] = useState(props.data.biography?props.data.biography:'')
    const [costHour, setCostHour] = useState(props.data.usd?props.data.usd:10)
    const [costCent, setCostCent] = useState(props.data.cent?props.data.cent:0)
    const [limitChar, setLimitChar] = useState(250-(props.data.biography?props.data.biography.length:textarea.length))

    useEffect(() => {
        setLimitChar(250 - textarea.length)
    }, [textarea])

    const handleText=(e)=>{
        setTextarea(e.target.value)
        props.onChange(e)
    }

    const handleCost=(e)=>{
        e.target.name==='usd'?
            setCostHour(e.target.value)
                :
            setCostCent(e.target.value)
        props.onChange(e)
    }

    const NumberGood = 'text-green-600';
    const NumberMiddle = 'text-orange-500';
    const NumberBad = 'text-red-500'

    return (
        <div>
            <div className='flex flex-col h-96 justify-center w-96 mb-4'>
                <div className='flex flex-col mb-6'>
                    <label className='font-bold text-xl tracking-wider mb-2'>Presentación Personal</label>
                    <div className='my-4'>
                        <Textarea   color="lightBlue"
                                    name='biography'
                                    size="regular"
                                    maxLength='250'
                                    value={textarea}
                                    onChange={handleText}
                                    outline={false}
                                    placeholder='Recuerda que lo que escribas aqui, lo verán tus futuros clientes!'
                            /> 
                    </div>
                    <div className='flex items-center justify-start border-gray-300 border-b pb-4' >
                        <span className='font-normal mr-2 '>Te quedan </span>
                        <p className={limitChar>100?NumberGood:limitChar>10?NumberMiddle:NumberBad}>{limitChar}</p>
                        <span className='font-normal ml-2'>caracteres</span>
                    </div>
                </div>
                <div>
                    <label className='font-bold text-medium tracking-wider'
                        >Precio por sesión
                        <span className='ml-2 text-green-600'>{`$${costHour}`}</span>.
                        <span className='mr-2 text-green-600'>{costCent}</span>
                        USD
                    </label>
                    <div className='flex items-center justify-around my-4'>
                        <div className='flex flex-col'>
                            <input  type="range" 
                                    name='usd' 
                                    min="10" 
                                    max="50"
                                    value={costHour} 
                                    className='rounded-lg overflow-hidden appearance-none bg-gray-200 h-3 w-44'
                                    onChange={handleCost}
                                />
                            <p className='flex justify-center'>Dólares</p>
                        </div>
                        <div className='flex flex-col'>
                            <input  type="range" 
                                    name='cent' 
                                    min="0" 
                                    max="99"
                                    value={costCent} 
                                    className='rounded-lg overflow-hidden appearance-none bg-gray-200 h-3 w-44'
                                    onChange={handleCost}
                                />
                            <p className='flex justify-center'>Centavos</p>
                        </div>
                    </div>
                </div>
            </div>
            <PopBtns    onSuccess={props.onSuccess}
                        onCancel={props.onCancel}
                    />
        </div>
    )
}

export default EditPresentation
