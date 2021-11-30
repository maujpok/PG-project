import React, { useEffect, useState } from 'react';
import PersonalDashboardContainer from '../PersonalDashboards/PersonalDashboardContainer';
import PersonalInformationContainer from '../PersonalDashboards/PersonalInformationContainer';
import PersonalTaskComponent from '../PersonalDashboards/PersonalTaskComponent';
import ProfessionalPostsContainer from '../PersonalDashboards/ProfessionalPostsContainer';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAppointments, setProfessional } from '../../../Controllers/actions/userActions';

function UserDashboard({userData, userId, token}) {
    //console.log(userData);
    const dispatch = useDispatch();

    const prof = userData.isProfessional?userData.isProfessional:null;
    useEffect(() => {
        window.scrollTo(0, 0);
        userData.isProfessional && dispatch(setProfessional());

        dispatch(getAppointments(userId, prof, token))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const [userInfo, setUserInfo] = useState('personalInfo')
    

    const changeUserState = (e)=>{
        setUserInfo(e.target.name);
    }

    const lateralBtn=`my-3 w-full h-10 mr-4 rounded-xl duration-300
    text-green-500 font-medium tracking-widest
    ring-white bg-opacity-5 ring-4 ring-offset-1 ring-offset-green-500 
    bg-white hover:bg-green-500 hover:text-white`    

    return (
        <React.Fragment>
            <div className="wrapper bg-professional-title">
                <div className="wrapper padd-lg bg-color-light-a80">
                    <section>
                        <div className="col-1-1@xl col-1-1@lg col-1-1@md">
                            <div className='font-main font-2x'>
                                {userData.isProfessional?
                                <div>
                                    <span className="padd-md-b padd-lg-r text-bold border-bottom-color-main">
                                        {`${userData.name} ${userData.lastname}`}
                                    </span>
                                    <div className="mrg-sm-t">
                                        {userData.category.name}
                                    </div>
                                </div>
                                :<span>{`${userData.name} ${userData.lastname}`}</span>}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="wrapper mrg-lg-t">
                <section>
                    <div className='col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm col-1-1@xs' data-uk-height-match=".normalize">
                        <div className='col-1-5@xl col-1-4@lg col-1-1@md col-1-1@sm col-1-1@xs padd-lg bg-t3-'>
                            <div className='padd-lg bg-color-light border-color-dark-a20 border-radius-sm box-shadow-xs normalize'>
                                {userData.isProfessional && 
                                    <PersonalDashboardContainer user={userData}/>
                                }

                                {userData.isProfessional &&

                                    <Link to={`/${userData.username}/horarios`} >
                                        <button
                                            className={lateralBtn}
                                        >
                                            Gestiona tus turnos
                                        </button>
                                    </Link>
                                }
                                {userData.isProfessional &&
                                    <Link to={`/profesionales/${userData.username}`} >
                                        <button
                                            className={lateralBtn}
                                        >
                                            Perfil Profesional
                                        </button>
                                    </Link>
                                }
                                
                                <Link to='/facturas' >
                                    <button
                                        className={lateralBtn}
                                    >
                                        Facturas 
                                    </button>
                                </Link>
                                
                            </div>
                        </div>
                        <div className='col-2-5@xl col-3-4@lg col-1-1@md col-1-1@sm col-1-1@xs padd-lg'>
                            <div className='padd-lg bg-color-light border-color-dark-a20 border-radius-sm box-shadow-xs normalize'>
                                <PersonalInformationContainer
                                    userData={userData}
                                    isProf={userData.isProfessional && true }
                                    changeUserState={changeUserState}
                                    userInfo={userInfo}
                                />
                            </div>
                        </div>
                        {/* Container: Schedule */}
                        <div className='col-1-5@xl col-2-4@lg col-1-1@md col-1-1@sm col-1-1@xs padd-lg bg-t5-'>
                            <div className='bg-color-light border-color-dark-a20 border-radius-sm box-shadow-xs normalize'>
                                <PersonalTaskComponent isProfessional={userData.isProfessional} userId={userId} personalName={`${userData.name} ${userData.lastname}`}/>
                            </div>
                        </div>
                        {userData.isProfessional && 
                        <div className='col-1-5@xl col-2-4@lg col-1-1@md col-1-1@sm col-1-1@xs padd-lg bg-t6-'>
                            <div className='bg-color-light border-color-dark-a20 border-radius-sm box-shadow-xs normalize'>
                                <ProfessionalPostsContainer categoryId={userData.category._id} userId={userData._id}/>
                            </div>
                        </div>}
                    </div>
                </section>
            </div>
        </React.Fragment>
    )
};

export default UserDashboard;
