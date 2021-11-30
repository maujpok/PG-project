import React, { useEffect } from 'react';
import ComponentHeader from './../Components/ComponentHeader';

const componentHeaderData = {
    title: "Política de Ventas",
    subtitle: "Fecha de entrada en vigor: 11 de Noviembre 2021",
    bg: null,// Si esta propiedad se envia null, se asigna un fondo aleatorio.
}

function SalesPolicy() {
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
                                LATAM EXPONENTIAL, en su interés de ofrecer el mejor servicio y una atención oportuna durante todo el proceso comercial, informa las políticas de ventas, las cuales establecen las condiciones para garantizar y fortalecer la relación comercial con nuestros clientes. Al realizar sus compras usted está aceptando las Políticas establecidas por nuestra organización las cuales se detallan a continuación:
                            </p>
                            <p className="mrg-xl-t">
                            Estas condiciones se aplicarán de manera conjunta en aquellos casos que una persona, siendo usuario, decida contratar alguno de los servicios que se ofrecen en LATAM EXPONENTIAL.
                            Se entenderá por cliente, para efectos de estas políticas de ventas, aquella persona, usuaria del sitio, que adquiera, o desee adquirir, un servicio de los ofrecidos por los profesionales registrados.
                            </p>
                            <p className="mrg-xl-t">
                            Los pagos se podrán realizar con tarjeta de crédito o de débito, o a través de la plataforma de pago PayPal, quienes serán las únicas responsables de los datos suministrados por el comprador, ya que en ningún momento llegan a ser conocimiento de LATAM EXPONENTIAL. Cualquier problema relacionado con el pago o un mal uso de este tipo de datos, PayPal o tarjeta, según corresponda, será el único responsable.
                            </p> 
                            {/* <ol className="mrg-xl-t">
                                <li>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>2. Phasellus volutpat tellus nec vestibulum imperdiet.</li>
                                <li>3. Quisque et tellus eu nisi rutrum malesuada eu quis orci.</li>
                                <li>4. Mauris viverra ligula id pretium aliquam.</li>
                                <li>5. Nam blandit orci vel ex fermentum egestas.</li>
                                <li>6. Sed nec odio ac lorem faucibus pharetra.</li>
                            </ol> */}
                            <p className="mrg-xl-t">
                                Si existe alguna promoción o descuento, se aplicará solamente a aquellos servicios que aún no hayan sido contratados. Si el cliente ya ha contratado algún servicio, no se podrá aplicar la promoción o descuento con efectos retroactivos.
                            </p> 
                            <p className="mrg-xl-t">
                            Todos los impuestos y cargos relacionados con la compra/contratación se indicarán antes de realizar el pago. Una vez efectuado el pago, se procederá al envío de la factura correspondiente, en la cual se incluirán detalladamente los impuestos y cargos que sean aplicables.
                            Todos los impuestos que por ley deban estar incluidos, serán visualizados en el presupuesto, en la factura y, de ser el caso, en el paso previo al pago dentro del sitio web o de otros afiliados a este y utilizados para vender el servicio.
                            </p>
                            <p className="mrg-xl-t">
                            En todo momento se obrará de buena fe y bajo las instrucciones del cliente, por lo cual, si algún material que este entregue infringe derechos intelectuales o de propiedad industrial de terceros, la responsabilidad legal será de quien contrate el servicio.
                            </p> 
                        </div>
                    </section>
                </div>
            </div>
        </React.Fragment>
    )
}
export default SalesPolicy