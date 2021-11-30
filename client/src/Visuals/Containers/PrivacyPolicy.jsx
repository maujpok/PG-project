import React, { useEffect } from 'react';
import ComponentHeader from './../Components/ComponentHeader';

const componentHeaderData = {
    title: "Política de Privacidad",
    subtitle: "Fecha de entrada en vigor: 11 de Noviembre 2021",
    bg: null,// Si esta propiedad se envia null, se asigna un fondo aleatorio.
}

function PrivacyPolicy() {
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    return (
        <React.Fragment>
            <ComponentHeader data={componentHeaderData} />
            <div className="wrapper">
                <div className="wrapper padd-lg">
                    <section>
                        <div className="col-1-1@xl col-1-1@lg col-1-1@md padd-xl-b">
                            <p className="mrg-xl-t font-lg">                
                                LATAM EXPONENTIAL, en su interés de ofrecer el mejor servicio y una atención oportuna durante todo el proceso comercial, informa las políticas de privacidad, las cuales establecen las condiciones para garantizar y fortalecer la relación comercial con nuestros clientes. Al realizar sus compras usted está aceptando las Políticas establecidas por nuestra organización las cuales se detallan a continuación:
                            </p>
                            <p className="mrg-xl-t">
                            En LATAM EXPONENTIAL entendemos a la protección de los datos personales como una oportunidad para generar valor para nuestros usuarios. Haciendo un uso responsable de la información personal, no sólo protegemos la privacidad de quienes nos confiaron sus datos, sino que les permitimos operar con seguridad y confianza en nuestro ecosistema.
                            Por eso, tu privacidad es muy importante para nosotros y nos esforzamos para protegerla.
                            </p>
                            <p className="mrg-xl-t">
                            LATAM EXPONENTIAL recolecta tu información personal para que puedas disfrutar de nuestros servicios, y poder mejorarlos de manera continua.
                            En algunos casos, la información la facilitás tu mismo, al registrarte o al proveer información cuando utilizás alguno de nuestros servicios. En otros, los recolectamos automáticamente, como cuando navegás por nuestras páginas y utilizás nuestros servicios. También podemos recolectar información acerca de ti de otras fuentes confiables. 
                            </p>
                            <ol className="mrg-xl-t">
                                <li>Estos son los tipos de datos que podríamos recolectar:</li>
                                <li>1. Apodo o seudónimo para operar en las plataformas de MercadoLibre.</li>
                                <li>2. Nombre, imagen personal.</li>
                                <li>3. Número de matrícula.</li>
                                <li>4. Información de contacto (como número de teléfono o dirección de correo electrónico).</li>
                                <li>5. Información de los dispositivos o computadoras desde los que accedes a la plataforma de LATAM EXPONENTIAL y otros datos capturados automáticamente (como el tipo o versión del navegador o del sistema operativo, configuraciones, datos de conexión, información sobre algunas de las aplicaciones descargadas y parámetros).</li>
                                <li>6. Dirección IP de internet que utilizás al conectarte a nuestros servicios o al navegar nuestros sitios web.</li>
                            </ol>
                            <p className="mrg-xl-t">
                            El resguardo de tu privacidad es muy importante para LATAM EXPONENTIAL. Por ello, no vendemos ni comercializamos información que identifique a nuestros usuarios. Tampoco compartimos o transferimos de ningún otro modo tu información personal a terceros.
                            </p> 
                            <p className="mrg-xl-t">
                            Solo almacenaremos la información personal durante el tiempo necesario para cumplir con el propósito para el que se ha recopilado, para cumplir con requisitos reglamentarios o legales, o durante el periodo de prescripción legal de posibles responsabilidades legales o contractuales.
                            Una vez concluido el lapso, los datos serán eliminados o anonimizados de manera tal que no pueda ser individualizada ninguna persona, según lo permita la normativa de cada país.
                            </p> 
                        </div>
                    </section>
                </div>
            </div>
        </React.Fragment>
    )
}
export default PrivacyPolicy