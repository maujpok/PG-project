import React from 'react';

const PaymentsCartClient = ({render}) => {
    return ( 
        <React.Fragment>
            <div className={`wrapper padd-lg-lr ${window.innerWidth >= 960 ? 'padd-2x-tb' : 'padd-lg-tb'}`}>
                <section>
                    <div className="padd-lg text-bold font-xl font-main">
                        Sesiones Compradas
                    </div>
                    <div className="element-xl-lg-md">
                        <table className="shadow-lg table-auto bills">
                            <thead>
                                <tr className="bg-primary font-lg">
                                    <th className="padd-lg font-color-light">
                                        Profesional
                                    </th>
                                    <th className="padd-lg font-color-light">
                                        Precio
                                    </th>
                                    <th className="padd-lg font-color-light">
                                        Fecha
                                    </th>
                                    <th className="padd-lg font-color-light">
                                        Sesiones<br/><span className="font-sm">(30 min)</span>
                                    </th>
                                    <th className="padd-lg font-color-light">
                                        Estado
                                    </th>
                                    <th className="padd-lg font-color-light">
                                        Orden de Pago
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {render.length !== 0 ? render.map((e,index) => {
                                let Render = 
                                <tr key={index} className="border-gray-200">
                                    <td align="center" className="padd-lg text-center text-bold">
                                        {e.description}
                                    </td>
                                    <td align="center" className="padd-lg text-center">
                                        $ {e.totalCost}
                                    </td>
                                    <td align="center" className="padd-lg text-center">
                                        {e.date.slice(0,10)}
                                    </td>
                                    <td align="center" className="padd-lg text-center">
                                        {e.numberOfSessions}
                                    </td>
                                    <td align="center" className="padd-lg text-center">
                                        Pagado
                                    </td>
                                    <td align="center" className="padd-lg text-center">
                                        {e.orderID}
                                    </td>
                                </tr>
                                return Render
                                })
                            :
                            <tr>
                                <td colSpan="6">
                                    <div className="wrapper bg-color-extra4-a20 padd-xl text-bold font-lg border-radius-sm flex-center">
                                        No hay Facturas para mostrar.
                                    </div>
                                </td>
                            </tr>
                            }
                            </tbody>
                        </table>
                    </div>
                    <div className="element-sm-xs">
                        {
                            render.length !== 0 ? render.map((e,index) => {
                                let Render = 
                                    <div key={index} className="col-1-1@sm col-1-1@xs mrg-lg-t">
                                        <div className="bg-color-extra4-a20 border-radius-sm border-color-dark-a20 overflow-hidden shadow-lg">
                                            <div className="padd-lg font-md bg-color-primary font-color-light border-bottom-color-dark-a20">
                                                <div className="text-bold">Orden de Pago:</div>
                                                <div>{e.orderID}</div>
                                            </div>
                                            <div className="padd-lg font-sm">
                                                <div className="flex-bar">
                                                    <div className="text-bold">Fecha:</div>
                                                    <span>{e.date.slice(0,10)}</span>
                                                </div>
                                                <div className="mrg-md-t flex-bar">
                                                    <div className="text-bold">Profesional:</div>
                                                    <span>{e.description}</span>
                                                </div>
                                                <div className="mrg-md-t flex-bar">
                                                    <div className="text-bold">Precio:</div>
                                                    <span>$ {e.totalCost}</span>
                                                </div>
                                                <div className="mrg-md-t flex-bar">
                                                    <div className="text-bold">Sesiones (30 min):</div>
                                                    <span>{e.numberOfSessions}</span>
                                                </div>
                                                <div className="mrg-md-t flex-bar">
                                                    <div className="text-bold">Estado:</div>
                                                    <span>Pagado</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                              
                                    return Render
                            })
                            :
                            <div className="wrapper bg-color-extra4-a20 padd-xl text-bold border-radius-sm flex-center">
                                No hay Facturas para mostrar
                            </div>
                        }
                    </div>
                </section>
            </div>
        </React.Fragment>
    );
}
 
export default PaymentsCartClient;