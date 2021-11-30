import React from 'react'

const SuggestionsSupport = () => {
    const obj = [
        {title:'Registro',
        description: 'Al registrarte por favor comprueba tus datos ya que son fundamentales para el uso correcto y prestación de servicios en nuestra plataforma.',
        author: 'LATAM EXPONENTIAL'
        },
        {title:'Búsqueda',
        description: 'En nuestra plataforma puedes ajustar tu búsqueda y encontrar el profesional que más se adecúe a tus necesidades, desde abogados hasta profesores de música',
        author: 'LATAM EXPONENTIAL'
        },
        {title:'Preparación',
        description: 'Si eres cliente ten preparada tu consulta y los documentos necesarios a mano así puedes aprovechar al máximo el tiempo en la consulta con el profesional.',
        author: 'LATAM EXPONENTIAL'
        },
        {title:'Contacto',
        description: 'Ante cualquier consulta o problema al usar nuestra plataforma no dudes en ponerte en contacto con nostros y resolveremos tus dudas lo más pronto posible.',
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
 
export default SuggestionsSupport;