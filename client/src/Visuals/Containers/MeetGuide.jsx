import React from 'react'

const pageData = {
    title: "Como crear tu link de meet",
    subtitle: "Latam Exponential",
    content: ""
}

function MeetGuide() {
    return (
        <React.Fragment>
            <div className="wrapper bg-professional-title">
                <div className="wrapper padd-lg bg-color-light-a80">
                    <section>
                        <div className="col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm col-1-1@xs">
                            <div className='font-main'>
                                <span className="padd-md-b padd-lg-r text-bold font-2x border-bottom-color-main">
                                    {pageData.title}
                                </span>
                                <div className="mrg-sm-t font-lg">
                                    {pageData.subtitle}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="wrapper">
                <div className="wrapper padd-lg">
                    <section>
                        <div className="col-1-1@xl col-1-1@lg col-1-1@md padd-xl-b">
                            <p className="mrg-xl-t font-lg">
                                Guía paso a paso
                            </p>
                            <p className="mrg-xl-t font-lg">
                                Sabemos que es difícil la primera vez, así que te queremos acompañar
                            </p>
                            <p className="mrg-xl-t">
                                Antes de comenzar, recuerda estar logueado con tu cuenta de Google en <a href ="https://meet.google.com/" 
                                target="_blank" rel="noreferrer">Meet</a>
                            </p>
                            <p className="mrg-xl-t">
                                Ahora sigue las siguientes imágenes paso a paso!
                            </p> 
                            <ol className="mrg-xl-t">
                                <li><img src='https://cdn.discordapp.com/attachments/890961467648647208/908742338313060443/unknown.png' className='w-3/5' alt='paso uno'/></li>
                                <li><img src='https://cdn.discordapp.com/attachments/890961467648647208/908742404402724944/unknown.png' className='w-3/5' alt='paso dos'/></li>
                                <li><img src='https://cdn.discordapp.com/attachments/890961467648647208/908742701174902844/unknown.png' className='w-3/5' alt='paso tres'/></li>
                                <li><img src='https://cdn.discordapp.com/attachments/890961467648647208/908742900454686801/unknown.png' className='w-3/5' alt='paso cuatro'/></li>
                                <li><img src='https://cdn.discordapp.com/attachments/890961467648647208/908743036681465886/unknown.png' className='w-3/5' alt='paso cinco'/></li>
                                <li><img src='https://cdn.discordapp.com/attachments/890961467648647208/908743133670567976/unknown.png' className='w-3/5' alt='paso seis'/></li>
                                <li><img src='https://cdn.discordapp.com/attachments/890961467648647208/908743369939890236/unknown.png' className='w-3/5' alt='paso seis'/></li>
                                <li><img src='https://cdn.discordapp.com/attachments/890961467648647208/908743540622897192/unknown.png' className='w-3/5' alt='paso seis'/></li>
                                <li><img src='https://cdn.discordapp.com/attachments/890961467648647208/908743948485423124/unknown.png' className='w-3/5' alt='paso seis'/></li>
                            </ol>
                            <p className="mrg-xl-t">
                                Esperamos que no resultara muy tedioso
                            </p> 
                        </div>
                    </section>
                </div>
            </div>
        </React.Fragment>
    )
}
export default MeetGuide