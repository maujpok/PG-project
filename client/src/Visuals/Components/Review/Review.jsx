import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getReviews } from "../../../ApiReq/constantInfo";
import PopContainer from "../PopContainer";
import EditReview from "./EditReview";
import ComponentHeader from './../ComponentHeader';
import {Link} from 'react-router-dom'
import "../../Assets/CustomGS.css";

const componentHeaderData = {
    title: "Valoramos tu Opinión",
    subtitle: "Ayudanos a mejorar nuestro servicio día a día.",
    bg: null,// Si esta propiedad se envia null, se asigna un fondo aleatorio.
}

export default function Review() {
    const [review, setReview] = useState({});
    const [popUp, setPopUp] = useState(false);

    const userId = useSelector((state) => state.sessionReducer.status.id);
    const sesion = useSelector(state=>state.sessionReducer.status.token)

    useEffect(() => {
        window.scrollTo(0, 0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        getReviews(userId).then((r) => {
            setReview(r);
        });  
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    },[]);

    function changePopUp(e) {
        setPopUp((state) => (state ? false : true));
    }

    if(sesion){
        return (
            <React.Fragment>
                <ComponentHeader data={componentHeaderData} />
                <div className="wrapper padd-xl-tb">
                    <section className="flex-center">
                        <div className="col-1-2@xl col-1-2@lg col-3-4@md col-1-1@sm col-1-1@xs">
                            {!review ? (
                                <div className="height-40vh flex-center">
                                    <div>
                                        <div className="font-lg text-bold text-center">
                                            Es importante para nosotros conocer tu opinión sobre la plataforma
                                        </div>
                                        <button onClick={changePopUp} className="width-100 mrg-xl-t padd-md border-radius-sm action action-user-dashboard-success">
                                            Añadir opinión
                                        </button>
                                    </div>
                                </div>
                                ) : (
                                <div>
                                    <div className="font-lg text-bold text-center">
                                        Tu opinión:
                                    </div>
                                    <div className={`position-relative width-100 mrg-xl-t padd-lg bg-color-extra4-a20 border-radius-sm border-color-dark-a20 overflow-y-auto scroll ${window.innerWidth >= 960 ? 'height-25vh' : 'height-50vh'}`}>
                                        {review.text}
                                        <div className="position-bottom-right padd-md">
                                            <span 
                                                className={`padd-sm-tb padd-lg-lr text-bold- font-sm font-color-light border-radius-xl ${review.rate === "Good" ? "bg-color-success" : "bg-color-danger"}`}>
                                                {review.rate === "Good" ? "Bueno" : "Malo"}
                                            </span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={changePopUp}
                                        className="width-100 mrg-xl-t padd-md border-radius-sm action action-user-dashboard-success">
                                        Editar opinión
                                    </button>
                                </div>
                            )}            
                            <PopContainer
                                children={
                                    <EditReview
                                        close={setPopUp}
                                        review={review}
                                        setReview={setReview}
                                        userId={userId}
                                    />
                                }
                                trigger={popUp}
                            />
                        </div>
                    </section>
                </div>
            </React.Fragment>
        );
    }else{
        return(
            <React.Fragment>
                <ComponentHeader data={componentHeaderData} />
                <section className="flex-center">
                    <div className="col-1-2@xl col-1-2@lg col-2-3@md col-1-1@sm col-1-1@xs height-40vh flex-center">
                        <div>
                            <div className="font-lg text-bold text-center">
                                ¡Inicia sesión para dejar tu opinión sobre nuestra plataforma!
                            </div>
                            <div className="">
                                <Link to='/ingresar'>
                                    <button className="width-100 mrg-xl-t padd-md border-radius-sm action action-user-login"> 
                                        Iniciar sesión
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
