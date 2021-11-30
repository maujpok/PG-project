import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {postTipUser} from '../../../ApiReq/users';
import PopBtns from '../PopBtns';

function AddPostComponent({close,setTips,userId,categoryId}) {

    const token = useSelector(state=>state.sessionReducer.status.token);
    const [post, setPost] = useState('');
    const [disabled,setDisabled] = useState(true);
    const [characters,setCharacters] = useState(80);
    
    function postChange(e){
        if(e.target.value.length <= 80){
            setPost(e.target.value);
            setDisabled(e.target.value.length<1);
            setCharacters(80-e.target.value.length);
        }
    }

    function postTip(e){
        e.preventDefault();
        postTipUser({text:post,userId,categoryId},token)
        .then(r => setTips(s => [...s,r]));
        close();
    }


    return (
        <form className='flex flex-col h-3/5 justify-evenly'>
                <h1 className='text-bold font-lg'>Postea un tip para la plataforma:</h1>
                <textarea placeholder='Haz una publicación...' 
                        onChange={postChange} 
                        value={post} 
                        rows="5"
                        className='bg-gray-50 rounded-lg p-4 resize-none'>{post}</textarea>
                <span className='font-sm'>Te quedan {characters} caracteres</span>
            <div className='flex justify-center items-center mt-4'>
                <PopBtns    onSuccess={postTip}
                            disabled={disabled}
                            onCancel={()=>close()}
                    />
            </div>
        </form>
    )
}

export default AddPostComponent;
