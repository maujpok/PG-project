import React from 'react'
import PersonalCardUser from './PersonalCardUser'

function PersonalDashboardContainer({user}) {
    return (
        <PersonalCardUser
            img={user.img} 
            likes={user.likes} 
            dislikes={user.dislikes} 
            professional={user.isProfessional}
            isVerified={user.isVerified}
            session={user.session}
        />
    )
}

export default PersonalDashboardContainer
