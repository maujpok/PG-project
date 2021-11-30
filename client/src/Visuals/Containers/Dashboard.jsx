import React, { useEffect, useState } from 'react'
import { Redirect, useHistory } from 'react-router'
import UserDashboard from '../Components/UserDashboard/UserDashboard'
import { getSingleUser } from '../../ApiReq/users'
import { useSelector } from 'react-redux'
import Loading from '../Components/Loading'



function Dashboard({match}) {
    const history=useHistory()
    const status = useSelector(state =>  state.sessionReducer.status)
    const username = match.params.username

    const [userData, setUserData] = useState({})

    const checkInfo=(user)=>{
        getSingleUser(user).then(res=>{
            setUserData(res)
            
        })
        history.push(`/miperfil/${user}`)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        if(status.username){
            status.username && username===status.username?
            checkInfo(status.username)
            :
            checkInfo(status.username)
        }else if(!status.username){
            history.push('/ingresar')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    
    const divClass = 'flex justify-center items-center h-screen w-screen'
    const imgClass= 'w-96 h-96'
    
    return (
        <div>
            {(!status.token.length>0 && !userData) && <Redirect to='/'/>}
            {status.token.length>0 && userData?.name?
            <UserDashboard userData={userData} userId={status.id} token={status.token}/>
                :
            <Loading divClass={divClass} imgClass={imgClass}/>}
        </div>
    )
}

export default Dashboard
