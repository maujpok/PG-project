import React, { useEffect, useState } from 'react'
import PopBtns from './PopBtns'
import { BiLike, BiDislike } from "react-icons/bi";
import Textarea from "@material-tailwind/react/Textarea";
import { BsFillEmojiAngryFill, BsFillEmojiFrownFill, BsFillEmojiNeutralFill, BsFillEmojiSmileFill, BsFillEmojiLaughingFill } from "react-icons/bs";
//import { useDispatch, useSelector } from 'react-redux';

function CreateReview(props) {
    const [rating, setRating] = useState(3)
    const [textarea, setTextarea] = useState('')
    const [limitChar, setLimitChar] = useState(100-textarea.length)


    useEffect(() => {
        setLimitChar(100 - textarea.length)
    }, [textarea])

    const handleRating =(e)=>{
        switch (e.target.id) {
            case '1':
                setRating(1)
                break;
            case '2':
                setRating(2)
                break;
            case '3':
                setRating(3)
                break;
            case '4':
                setRating(4)
                break;
            case '5':
                setRating(5)
                break;
            case 'dislike':
                setRating(2)
                break;
            case 'like':
                setRating(4)
                break;
            default:
                setRating(3)
                break;
        }
    }

    const handleSuccess=()=>{
        props.onSuccess({text:textarea, score:rating})
    }

    const handleText=(e)=>{
        setTextarea(e.target.value)
    }

    const NumberGood = 'text-green-600';
    const NumberMiddle = 'text-orange-500';
    const NumberBad = 'text-red-500'

    const dislikeClass='h-12 text-red-500 relative top-1 right-2 cursor-pointer text-4xl text-bold transition ease-in duration-700 focus:outline-none';
    const disactiveDislike='h-12 text-gray-100 relative top-1 right-2 cursor-pointer text-4xl text-bold transition ease-in duration-700 focus:outline-none';
    const likeClass='h-12 text-green-400 relative top-1 left-2 cursor-pointer text-4xl text-bold transition ease-in duration-700 focus:outline-none';
    const disactiveLike='h-12 text-gray-100 relative top-1 left-2 cursor-pointer text-4xl text-bold transition ease-in duration-700 focus:outline-none';
    const grayClass="w-12 h-12 text-gray-400 cursor-pointer text-4xl focus:outline-none";
    const redClass="w-12 h-12 text-red-500 cursor-pointer text-4xl focus:outline-none";
    const yellowClass="w-12 h-12 text-yellow-500 cursor-pointer text-4xl focus:outline-none";
    const greenClass="w-12 h-12 text-green-400 cursor-pointer text-4xl focus:outline-none";


    return (
        <div>
            <div className='flex flex-col justify-center my-4'>
                <div className='flex justify-center my-2'>
                    <h3 className='text-semibold font-xl tracking-wider'>Califica al Profesional</h3>
                </div>
                <div className='flex justify-center'>
                    {
                        rating<2?<BsFillEmojiAngryFill className={redClass}/>:
                        rating===2?<BsFillEmojiFrownFill className={redClass}/>:
                        rating===3?<BsFillEmojiNeutralFill className={yellowClass}/>:
                        rating===4?<BsFillEmojiSmileFill className={greenClass}/>:
                        rating===5 && <BsFillEmojiLaughingFill className={greenClass}/>
                    }
                </div>
                <div className='flex justify-around w-4/5 m-auto border-b-2 pb-4'>
                    <BiDislike  className={rating<3?dislikeClass:disactiveDislike}
                                id='dislike' 
                                onClick={handleRating}
                        />
                    <button className={rating===0?grayClass:rating<3?redClass:rating>=4?greenClass:yellowClass}
                            id='1'
                            onClick={handleRating}>★</button>
                    <button className={rating<2?grayClass:rating<3?redClass:rating>=4?greenClass:yellowClass}
                            id='2'
                            onClick={handleRating}>★</button>
                    <button className={rating<3?grayClass:rating>=4?greenClass:yellowClass}
                                id='3'
                                onClick={handleRating}>★</button>
                    <button className={rating<4?grayClass:rating>=4?greenClass:yellowClass}
                                    id='4'
                                    onClick={handleRating}>★</button>
                    <button className={rating<5?grayClass:rating>=4?greenClass:yellowClass}
                            id='5'
                            onClick={handleRating}>★</button>
                    <BiLike    className={rating>3?likeClass:disactiveLike} 
                                        id='like' 
                                        onClick={handleRating}
                                />
                </div>
                <div className='mt-6 mx-4'>
                    <Textarea   color="lightBlue"
                                name='biography'
                                size="regular"
                                maxlength='100'
                                value={textarea}
                                onChange={handleText}
                                outline={false}
                                placeholder='Deja tu opinión sobre el profesional'
                        /> 
                </div>
                <div className='flex items-center justify-start border-gray-300 border-b pb-4' >
                    <span className='font-normal mr-2 '>Te quedan </span>
                    <p className={limitChar>50?NumberGood:limitChar>10?NumberMiddle:NumberBad}>{limitChar}</p>
                    <span className='font-normal ml-2'>caracteres</span>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <PopBtns 
                    onSuccess={handleSuccess}
                    onCancel={props.onCancel}/>
            </div>
        </div>
    )
}

export default CreateReview

