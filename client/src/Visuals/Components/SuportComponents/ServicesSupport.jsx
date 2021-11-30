import React from 'react'

const ServicesSupport = () => {
    const obj = [
        {title:'Ofrecer servicios',
        description: 'Para ofrecer tus servicios debes registrarte en el sitio como profesional. Si tu profesión requiere algún tipo de matrícula deberás proveernosla durante el registro para que podamos activar tu cuenta. Luego nosotros verificaremos tus datos y te daremos de alta para que puedas comenzar a trabajar en nuestra plataforma.',
        author: 'LATAM EXPONENTIAL'
        },
        {title:'Capacidad legal',
        description: 'Los Servicios sólo están disponibles para personas que tengan capacidad legal para contratar. No podrán utilizar los servicios las personas que no tengan esa capacidad o Usuarios de LATAM EXPONENTIAL que hayan sido suspendidos temporalmente o inhabilitados definitivamente.',
        author: 'LATAM EXPONENTIAL'
        },
        {title:'Reclamo por el servicio',
        description: 'En ese caso de tener un reclamo por el servicio de un profesional, póngase en contacto con nosotros y lo atenderemos personalmente.',
        author: 'LATAM EXPONENTIAL'
        },
        {title:'Evaluación',
        description: 'Luego de concluido el servicio el cliente siempre puede dejar una evaluación respecto a la calidad del servicio prestado por el profesional. Esto se verá reflejado luego en la puntuación del profesional.',
        author: 'LATAM EXPONENTIAL'
        },
    ]
    let publication = obj.map((e,i) => {
        let card = 
        <div key={i} className='m-1 flex flex-col mb-6 max-w-md py-4 px-8 bg-white shadow-2xl rounded-lg my-2'>

            <div>
                <h2 className='text-gray-800 text-3xl font-semibold'>
                    {e.title}
                </h2>
                <p className='mt-2 text-gray-600'>
                    {e.description}
                </p>
            </div>
            <div className='flex justify-end mt-auto pt-2'>
                <p className='text-xl font-medium text-red-500'>
                    {e.author}
                </p>
            </div>
        </div>
        return card
    })

    return ( 
<div className='flex flex-wrap justify-center '>
        {publication}
</div>
     );
}
 
export default ServicesSupport;