import React, {useEffect} from 'react';
import ComponentHeader from './../Components/ComponentHeader';

const componentHeaderData = {
    title: "Preguntas Frecuentes",
    subtitle: "Aquí encontrará la respuesta a las dudas más frecuentes.",
    bg: null,// Si esta propiedad se envia null, se asigna un fondo aleatorio.
}

const containerItems = [
    {
        question: "¿Puedo cancelar o cambiar la fecha de una asesoría?",
        answer: "En casos excepcionales es posible cambiar o cancelar la fecha, para eso póngase en contacto con nosotros.",
    },
    {
        question: "¿Se puede pedir un reembolso después de pagar una asesoría?",
        answer: "Sí, pero sólo en caso que la asesoría aún no haya sido llevada a cabo. Los plazos de devolución y el lugar donde se acreditará el reembolso dependen del medio que haya elegido para hacer el pago.",
    },
    {
        question: "¿Si no estoy satisfecho con el servicio que recibo, puedo presentar una queja o reclamo al profesional contratado directamente?",
        answer: "No, en ese caso por favor póngase en contacto con nosotros y atenderemos su reclamo personalmente.",
    },
    {
        question: "¿Cuáles son los métodos de pago aceptados en LATAM EXPONENTIAL?",
        answer: "Paypal o tarjeta de débito y crédito.",
    },
    {
        question: "¿Como puedo ofrecer mis servicios en LATAM EXPONENTIAL?",
        answer: "Para ofrecer sus servicios usted debe registrarse en el sitio como profesional. Luego nosotros verificaremos sus datos y lo daremos de alta para que pueda comenzar a trabajar en nuestra plataforma.",
    },
    {
        question: "¿Puedo si tengo más de una profesión puedo ofrecer múltiples servicios con un mismo perfil?",
        answer: "No, en ese caso deberá crear otra cuenta a su nombre.",
    },
    {
        question: "¿Es requisito obligatorio tener una tarjeta o certificado profesional para ofrecer mis servicios en LATAM EXPONENTIAL?",
        answer: "Eso dependerá de su profesión y los requisitos legales aplicables a cada país. Si su profesión requiere algún tipo de matrícula usted deberá proveernosla durante el registro para que podamos activar su cuenta.",
    },
    {
        question: "¿Con que frecuencia puedo retirar mis utilidades en LATAM EXPONENTIAL?",
        answer: "Una vez cada dos semanas usted podrá retirar las utilidades acumuladas del período.",
    },
    {
        question: "¿Puedo ofrecer mis servicios en un horario autónomo o el horario es estipulado por LATAM EXPONENTIAL?",
        answer: "Usted podrá establecer sus propios horarios una vez se haya registrado y estos serán los que se muestren a los clientes en su perfil profesional.",
    },
    {
        question: "¿Como puedo dar de baja mi perfil profesional en LATAM EXPONENTIAL?",
        answer: "Para dar de baja su perfil profesional por favor póngase en contacto con nostros y nos contactaremos con usted a la brevedad para dar de baja su cuenta.",
    },
]

function Faq() {
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    return (
        <React.Fragment>
            <ComponentHeader data={componentHeaderData} />
            <div className="wrapper">
                <div className="wrapper padd-lg">
                    <section>
                        <div className="col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm col-1-1@xs padd-xl-b">
                            <ul data-uk-accordion>
                            {
                                containerItems.map((elem, index)=>{
                                    return  <li key={index} className="mrg-lg-t">
                                                <button className="uk-accordion-title width-100 text-left padd-lg border-radius-sm">
                                                    {elem.question}
                                                </button>
                                                <div className="uk-accordion-content padd-xl border-radius-sm border-color-extra4-a60 bg-color-extra4-a20">
                                                    {elem.answer}
                                                </div>
                                            </li>
                                })
                            }
                            </ul>                           
                        </div>
                    </section>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Faq