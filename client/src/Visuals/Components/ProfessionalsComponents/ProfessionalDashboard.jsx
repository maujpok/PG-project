import React, {useEffect} from 'react'
import { useDispatch} from 'react-redux'
import { useParams } from 'react-router'
import { getProfByUser } from '../../../Controllers/actions/professionalsActions'
import ProfessionalContainer from './ProfessionalContainer'


function ProfessionalDashboard() {
    const {username}= useParams()
    const dispatch= useDispatch()
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getProfByUser(username))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <div /* className='bg-gray-100' */>
            <ProfessionalContainer username={username}/>
        </div>
    )
}

export default ProfessionalDashboard
