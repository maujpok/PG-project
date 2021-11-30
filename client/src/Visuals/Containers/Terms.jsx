import React, { useEffect } from 'react';
import ComponentHeader from './../Components/ComponentHeader';

const componentHeaderData = {
    title: "Términos y Condiciones",
    subtitle: "Fecha de entrada en vigor: 10 de Noviembre 2021",
    bg: null,// Si esta propiedad se envia null, se asigna un fondo aleatorio.
}

function Terms() {
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
                                Sabemos que es tentador saltarse estos Términos del Servicio, pero es importante determinar qué puedes esperar de nosotros al usar los servicios de LATAM EXPONENTIAL y qué esperamos nosotros de ti.
                            </p>
                            <p className="mrg-xl-t">
                            Los Servicios sólo están disponibles para personas que tengan capacidad legal para contratar. No podrán utilizar los servicios las personas que no tengan esa capacidad o Usuarios de LATAM EXPONENTIAL que hayan sido suspendidos temporalmente o inhabilitados definitivamente. 
                            </p>
                            <p className="mrg-xl-t">
                            Es obligatorio completar el formulario de registración en todos sus campos con datos válidos para poder utilizar los servicios que brinda LATAM EXPONENTIAL. El futuro Usuario deberá completarlo con su información personal de manera exacta, precisa y verdadera ("Datos Personales") y asume el compromiso de actualizar los Datos Personales conforme resulte necesario. El Usuario presta expresa conformidad con que LATAM EXPONENTIAL utilice diversos medios para identificar sus datos personales, asumiendo el Usuario la obligación de revisarlos y mantenerlos actualizados. LATAM EXPONENTIAL NO se responsabiliza por la certeza de los Datos Personales de los Usuarios. Los Usuarios garantizan y responden, en cualquier caso, de la veracidad, exactitud, vigencia y autenticidad de sus Datos Personales.
                            </p>
                            <p className="mrg-xl-t">
                            El Usuario será responsable por todas las operaciones efectuadas en su Cuenta, pues el acceso a la misma está restringido al ingreso y uso de su Clave de Seguridad, de conocimiento exclusivo del Usuario. El Usuario se compromete a notificar a LATAM EXPONENTIAL en forma inmediata y por medio idóneo y fehaciente, cualquier uso no autorizado de su Cuenta, así como el ingreso por terceros no autorizados a la misma. Se aclara que está prohibida la venta, cesión o transferencia de la Cuenta (incluyendo la reputación) bajo ningún título.
                            </p>
                            <p className="mrg-xl-t">
                            No está permitida ninguna acción o uso de dispositivo, software, u otro medio tendiente a interferir tanto en las actividades y operatoria de LATAM EXPONENTIAL como en las ofertas, descripciones, cuentas o bases de datos de LATAM EXPONENTIAL. Cualquier intromisión, tentativa o actividad violatoria o contraria a las leyes sobre derecho de propiedad intelectual y/o a las prohibiciones estipuladas en este contrato harán pasible a su responsable de las acciones legales pertinentes, y a las sanciones previstas por este acuerdo, así como lo hará responsable de indemnizar los daños ocasionados.
                            </p>
                            <p className="mrg-xl-t">
                            Sin perjuicio de otras medidas, LATAM EXPONENTIAL podrá advertir, suspender en forma temporal o definitivamente la Cuenta de un Usuario o una publicación, aplicar una sanción que impacte negativamente en la reputación de un Usuario, iniciar las acciones que estime pertinentes y/o suspender la prestación de sus Servicios si:
                            </p>
                            <ol className="mrg-xl-t">
                                <li>1. Se quebrantara alguna ley, o cualquiera de las estipulaciones de los Términos y Condiciones Generales y demás políticas de LATAM EXPONENTIAL.</li>
                                <li>2. Si incumpliera sus compromisos como Usuario.</li>
                                <li>3. Si se incurriera a criterio de LATAM EXPONENTIAL en conductas o actos dolosos o fraudulentos</li>
                                <li>4. No pudiera verificarse la identidad del Usuario o cualquier información proporcionada por el mismo fuere errónea.</li>
                                <li>5. LATAM EXPONENTIAL entendiera que las publicaciones u otras acciones pueden ser causa de responsabilidad para el Usuario que las publicó, para LATAM EXPONENTIAL o para los demás Usuarios en general.</li>
                            
                            </ol>
                            <p className="mrg-xl-t">
                            LATAM EXPONENTIAL podrá modificar los Términos y Condiciones Generales en cualquier momento haciendo públicos en el Sitio los términos modificados. Todos los términos modificados entrarán en vigor a los 10 (diez) días de su publicación. Dichas modificaciones serán comunicadas por LATAM EXPONENTIAL a los usuarios que en la Configuración de su Cuenta de LATAM EXPONENTIAL hayan indicado que desean recibir notificaciones de los cambios en estos Términos y Condiciones. Todo usuario que no esté de acuerdo con las modificaciones efectuadas por LATAM EXPONENTIAL podrá solicitar la baja de la cuenta.
                            </p>
                            <p className="mrg-xl-t">
                            LATAM EXPONENTIAL y/o sus sociedades controlantes, controladas, filiales o subsidiarias se reservan todos los derechos, incluyendo los derechos de propiedad intelectual e industrial, asociados con los servicios de LATAM EXPONENTIAL, sus sitios web, los contenidos de sus pantallas, programas, bases de datos, redes, códigos, desarrollo, software, arquitectura, hardware, contenidos, información, tecnología, fases de integración, funcionalidades, dominios, archivos que permiten al Usuario acceder y crear su Cuenta, herramientas de venta, marcas, patentes, derechos de autor, diseños y modelos industriales, nombres comerciales, entre otros, y declara que están protegidos por leyes nacionales e internacionales vigentes.
                            </p> 
                        </div>
                    </section>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Terms