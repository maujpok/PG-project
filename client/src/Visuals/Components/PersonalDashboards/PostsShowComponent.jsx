import React from 'react'
import {useSelector} from 'react-redux'
import {deleteTipUser} from '../../../ApiReq/users'


function PostsShowComponent({text,tipId,setTips}) {

    const token = useSelector(state=>state.sessionReducer.status.token)

    function deleteTip(e){
        e.preventDefault()
        deleteTipUser(tipId,token)
        .then(r=> setTips(s=>s.filter(tip => tip._id !== tipId)))

    }

    return (
        <div className='bg-color-extra4-a20 mrg-lg-t padd-lg border-color-dark-a20 border-radius-sm'>
            <span>{text}</span>
            <div onClick={deleteTip} 
            className="mrg-lg-t padd-sm-tb font-sm border-radius-sm action action-user-dashboard-cancel">
                Eliminar Publicación
            </div> 
        </div>
    )
}

export default PostsShowComponent
