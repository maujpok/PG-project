import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SchedulerCont from "../UserDashboard/SchedulerContainer";
import ComponentHeader from './../../Components/ComponentHeader';



export default function ManageSchedule(){

    const userData = useSelector(state => state.sessionReducer.status)   

    const componentHeaderData = {
        title: userData.username,
        subtitle: "Gestión de turnos.",
        bg: null,// Si esta propiedad se envia null, se asigna un fondo aleatorio.
    }

    return (
        <React.Fragment>
            <ComponentHeader data={componentHeaderData} />
            <div className="wrapper padd-xl-tb">
                <section>
                    <SchedulerCont userId={userData.id} />
                    <Link to={`/miperfil/${userData.username}`}>
                        <button className="mrg-lg-t width-100 padd-md border-radius-sm shadow-lg action action-primary-reverse">
                            Volver a mi perfil
                        </button>
                    </Link>
                </section>
            </div>
        </React.Fragment>
    )
};