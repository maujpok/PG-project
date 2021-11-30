import React from 'react';

// const componentHeaderData = {
//     title: "Facturas",
//     subtitle: "Información detallada de tus ventas en la aplicación.",
//     bg: null,// Si esta propiedad se envia null, se asigna un fondo aleatorio.
// }

const PaymentsCartPro = ({render}) => {
    let totalProfitPC  = 0;
    let totalProfitMob  = 0;
    return ( 
        <React.Fragment>
            <div className={`wrapper padd-lg-lr ${window.innerWidth >= 960 ? 'padd-2x-tb' : 'padd-lg-tb'}`}>
                <section>
                    <div className="padd-lg text-bold font-xl font-main">
                        Sesiones Vendidas
                    </div>
                    <div className="element-xl-lg-md">
                        <table className="shadow-lg table-auto bills">
                            <thead>
                                <tr className="bg-primary font-lg">
                                    <th className="padd-lg font-color-light">
                                        Cliente
                                    </th>
                                    <th className="padd-lg font-color-light">
                                        Fecha de cita
                                    </th>
                                    <th className="padd-lg font-color-light">
                                        Fecha para cobro
                                    </th>
                                    <th className="padd-lg font-color-light">
                                        Costo Total
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
                                    totalProfitPC = totalProfitPC + Number(e.profit);
                                    let Render = 
                                    <tr key={index} className="border-gray-200">
                                        <td align="center" className="padd-lg text-center text-bold">
                                            {e.customerId.username}
                                        </td>
                                        <td align="center" className="padd-lg text-center">
                                            {e.schedules[0].date.year}-{e.schedules[0].date.shortcut.toString().slice(3,5)}-{e.schedules[0].date.dayNumber}
                                        </td> 
                                        <td align="center" className="padd-lg text-center">
                                            {e.availableDate.slice(0,10)}
                                        </td>
                                        <td align="center" className="padd-lg text-center">
                                            $ {Math.round(e.profit*100)/100}
                                        </td>
                                        <td align="center" className="padd-lg text-center text-green-500">
                                            Disponible
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
                        <div className="mrg-2x-t col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm col-1-1@xs flex-center-xl-lg-md">
                            {/*<div className='grid grid-cols-2 mt-8 pb-8 shadow-xl w-11/12'>*/}
                            <div className='col-3-4@xl col-2-3@lg col-2-3@md'>
                                <div className='text-green-500 font-bold text-3xl'>
                                    Monto disponible: $ {Math.round(totalProfitPC*100)/100}
                                </div>
                            </div>
                            <div className='col-1-4@xl col-1-3@lg col-1-3@md'>
                                <button className="width-100 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded justify-self-center shadow-xl">
                                    Solicitar Cobro
                                </button>
                            </div>                            
                        </div>
                    </div>
                    <div className="element-sm-xs">
                        {
                            render.length !== 0 ? render.map((e,index) => {
                                totalProfitMob = totalProfitMob + Number(e.profit);
                                let Render = 
                                    <div key={index} className="col-1-1@sm col-1-1@xs mrg-lg-t">
                                        <div className="bg-color-extra4-a20 border-radius-sm border-color-dark-a20 overflow-hidden shadow-lg">
                                            <div className="padd-lg font-md bg-color-primary font-color-light border-bottom-color-dark-a20">
                                                <div className="text-bold">Orden de Pago:</div>
                                                <div>{e.orderID}</div>
                                            </div>
                                            <div className="padd-lg font-sm">
                                                <div className="flex-bar">
                                                    <div className="text-bold">Cliente:</div>
                                                    <span>{e.customerId.username}</span>
                                                </div>
                                                <div className="mrg-md-t flex-bar">
                                                    <div className="text-bold">Fecha de la Cita:</div>
                                                    <span>{e.schedules[0].date.year}-{e.schedules[0].date.shortcut.toString().slice(3,5)}-{e.schedules[0].date.dayNumber}</span>
                                                </div>
                                                <div className="mrg-md-t flex-bar">
                                                    <div className="text-bold">Fecha para Cobro:</div>
                                                    <span>{e.availableDate.slice(0,10)}</span>
                                                </div>
                                                <div className="mrg-md-t flex-bar">
                                                    <div className="text-bold">Costo Total:</div>
                                                    <span>$ {Math.round(e.profit*100)/100}</span>
                                                </div>
                                                <div className="mrg-md-t flex-bar">
                                                    <div className="text-bold">Estado:</div>
                                                    <span>Disponible</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                              
                                    return Render
                                    })
                                :
                                <h1>No hay Facturas que mostrar</h1>
                                }
                            
                        <div className="mrg-xl-t col-1-1@sm col-1-1@xs">
                            {/*<div className='grid grid-cols-2 mt-8 pb-8 shadow-xl w-11/12'>*/}
                            <div className='col-1-1@sm col-1-1@xs'>
                                <div className='text-center text-green-500 font-bold font-xl'>
                                    Monto disponible: $ {Math.round(totalProfitMob*100)/100}
                                </div>
                            </div>
                            <div className='mrg-xl-t col-1-1@sm col-1-1@xs'>
                                <button className="width-100 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded justify-self-center shadow-xl">
                                    Solicitar Cobro
                                </button>
                            </div>                            
                        </div>
                    </div>
                </section>
        </div>
    </React.Fragment>
    );
}
 
export default PaymentsCartPro;