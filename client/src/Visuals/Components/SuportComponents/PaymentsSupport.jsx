import React from 'react'

const PaymentsSupport = () => {

    const obj = [
        {title:'Métodos de pago',
        description: 'Los pagos se podrán realizar con tarjeta de crédito o de débito, o a través de la plataforma de pago PayPal.',
        author: 'LATAM EXPONENTIAL'
        },
        {title:'Descuentos',
        description: 'Si existe alguna promoción o descuento, se aplicará solamente a aquellos servicios que aún no hayan sido contratados.',
        author: 'LATAM EXPONENTIAL'
        },
        {title:'Cargos',
        description: 'Todos los impuestos y cargos relacionados con la compra/contratación en caso de aplicar se indicarán antes de realizar el pago.',
        author: 'LATAM EXPONENTIAL'
        },
        {title:'Impuestos',
        description: 'Todos los impuestos que por ley deban estar incluidos, serán visualizados en el presupuesto, en la factura y, de ser el caso, en el paso previo al pago dentro del sitio web o de otros afiliados a este y utilizados para vender el servicio.',
        author: 'LATAM EXPONENTIAL'
        },
    ]
    let publication = obj.map((e,i) => {
        let card = 
        <div key={i} className='m-1 mb-6 flex flex-col max-w-md py-4 px-8 bg-white shadow-2xl rounded-lg my-2'>
            <div>
                <h2 className='text-gray-800 text-3xl font-semibold'>
                    {e.title}
                </h2>
                <p className='mt-2 text-gray-600 pb-6'>
                    {e.description}
                </p>
            </div>
            <div className='flex justify-end mt-auto'>
                <p className='text-xl font-medium text-red-600'>
                    {e.author}
                </p>
            </div>
        </div>
        return card
    })

    return ( 
<div className='flex flex-wrap justify-center'>
        {publication}
</div>
     );
}
 
export default PaymentsSupport;