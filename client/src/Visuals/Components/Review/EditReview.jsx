import React, {useState} from 'react'
import {updateReviewUser,postReviewUser} from '../../../ApiReq/users'
import {useSelector} from 'react-redux'
import PopBtns from '../PopBtns'

export default function EditReview({close,review,setReview,userId}){

    const [rew,setRew] = useState(review?.text || '')
    const [rate,setRate] = useState(review?.rate || '')
    const [disabled,setDisabled] = useState(!review)
    const [characters,setCharacters] = useState(200-(review? review.text.length : 0))
    const token = useSelector(state=>state.sessionReducer.status.token)

    function rewChange(e){
        if(e.target.value.length <= 200){
            setRew(e.target.value)
            setDisabled(e.target.value && rate ? false : true )
            setCharacters(200-e.target.value.length)
        }
    }
    
    function editRew(e){
        e.preventDefault()
        updateReviewUser({text:rew,rate:rate, reviewId:review._id, token})
        .then(r=>setReview(r))
        close()
    }

    function sendReview(e){
        e.preventDefault()
        postReviewUser({text:rew,rate,userId},token)
        .then(r=>setReview(r))
        close()
    }

    function rateChange(e){
        e.preventDefault()
        setRate(e.target.value)
        setDisabled(rew ? false : true)
    }
    return(
        <form className='flex flex-col h-3/5 justify-evenly'>
                <h1 className='text-bold font-lg'>Tu opinión sobre la plataforma:</h1>
                <textarea placeholder='Dejanos tu feedback...' 
                        onChange={rewChange} 
                        value={rew} 
                        rows="5"
                        className='bg-gray-50 rounded-lg p-4 resize-none'>{rew}</textarea>
                <span className='font-sm'>Te quedan {characters} caracteres</span>
            <div className='flex justify-around w-full h-6 my-4'>
                <button value='Good' 
                    onClick={rateChange}
                    className={`focus:outline-none p-4 flex items-center justify-center rounded-xl px-12 ${rate==='Good' ?'bg-green-200':'bg-gray-200'}`}
                    >Bueno</button>
                <button value="Bad" 
                    onClick={rateChange}
                    className={`focus:outline-none p-4 flex items-center justify-center rounded-xl px-12 ${rate==='Bad' ?'bg-red-200':'bg-gray-200'}`}
                    >Malo</button>
            </div>
            <div className='flex justify-around'>
                <PopBtns 
                        disabled={disabled}
                        textBtn={review?'Editar':'Confirmar'}
                        onSuccess={review?editRew:sendReview}
                        onCancel={()=>close()}
                    />
            </div>
        </form>
    )
}
