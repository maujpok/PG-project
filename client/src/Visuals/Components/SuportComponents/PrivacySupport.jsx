import React from 'react'

const PrivacySupport = () => {
    const obj = [
        {title:'Datos Personales',
        description: 'Los usuarios garantizan y responden, en cualquier caso, de la veracidad, exactitud, vigencia y autenticidad de sus Datos Personales.',
        author: 'LATAM EXPONENTIAL'
        },
        {title:'Uso de la cuenta',
        description: 'El usuario debe notificarnos en forma inmediata y por medio idóneo y fehaciente, cualquier uso no autorizado de su cuenta, así como el ingreso por terceros no autorizados a la misma. Se aclara que está prohibida la venta, cesión o transferencia de la cuenta.',
        author: 'LATAM EXPONENTIAL'
        },
        {title:'Información personal',
        description: 'Recolectamos tu información personal para que puedas disfrutar de nuestros servicios, y poder mejorarlos de manera continua. En algunos casos, la información la facilitás tu mismo, al registrarte o al proveer información cuando utilizás alguno de nuestros servicios.',
        author: 'LATAM EXPONENTIAL'
        },
        {title:'Protección de la privacidad',
        description: 'El resguardo de tu privacidad es muy importante para LATAM EXPONENTIAL. Por ello, no vendemos ni comercializamos información que identifique a nuestros usuarios. Tampoco compartimos o transferimos de ningún otro modo tu información personal a terceros.',
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
                <p className='mt-2 text-gray-600'>
                    {e.description}
                </p>
            </div>
            <div className='flex justify-end mt-auto'>
                <p className='text-xl font-medium text-red-500'>
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
 
export default PrivacySupport;