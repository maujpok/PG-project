import React, {useEffect, useState} from "react";
import RegisterFormUser from "../Components/Register/RegisterFormUser";
import RegisterFormPro from "../Components/Register/RegisterFormPro";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../../Controllers/actions/userActions";
import { getAllCategories, getAllCountries } from "../../Controllers/actions/constantInfoActions";
import ComponentHeader from './../Components/ComponentHeader';

const componentHeaderData = {
    title: "Crea tu Cuenta",
    subtitle: "Completa los siguientes campos con tu información para continuar.",
    bg: null,// Si esta propiedad se envia null, se asigna un fondo aleatorio.
}

export default function Register(){
    const [active, setActive] = useState("cliente");
    const dispatch = useDispatch()
    
    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getAllUsers())
        dispatch(getAllCategories())
        dispatch(getAllCountries())
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleClick(e){
        const name= e.target.name
        if(name==="cliente") setActive("cliente")
        if(name==="profesional") setActive("profesional")
    }

    return(
        <React.Fragment>
            <ComponentHeader data={componentHeaderData} />
            <div className="wrapper uk-background-muted">
                <section>
                    <div className="mrg-lg-t col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm col-1-1@xs flex-center">
                        <div className="col-3-4@xl col-3-4@lg col-5-6@md col-1-1@sm col-1-1@xs padd-md-tb flex-center">
                            <div className="col-1-1@xl col-1-1@lg col-1-2@md col-1-2@sm col-1-2@xs">
                                <button
                                    className={`uk-button width-100 border-radius-sm action ${active === 'cliente' ? 'action-user-register' : 'action-user-register-inactive'}`}
                                    name="cliente"
                                    onClick={handleClick}
                                >
                                    Cliente
                                </button>
                            </div>
                            &emsp;
                            <div className="col-1-1@xl col-1-1@lg col-1-2@md col-1-2@sm col-1-2@xs">
                                <button
                                    className={`uk-button width-100 border-radius-sm action ${active === 'profesional' ? 'action-user-register' : 'action-user-register-inactive'}`}
                                    name="profesional"
                                    onClick={handleClick}
                                >
                                    Profesional
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mrg-lg-t padd-xl-b col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm col-1-1@xs flex-center">
                        {active==="cliente" && <RegisterFormUser/>}
                        {active==="profesional" && <RegisterFormPro/>}
                    </div>
                </section>
            </div>
        </React.Fragment>        
    )
} 