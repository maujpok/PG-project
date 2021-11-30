import React from 'react';

export default function Opinions({opinions}) {

    return (
        <div className="padd-lg">
        <div className='padd-md-b font-main text-bold text-center- font-xl border-bottom-color-main'>
            Opiniones de clientes
        </div>
        {
            opinions?.length
            ? opinions.slice(0,4).map((elem, index) => (
                <div key={index} className='bg-color-extra4-a20 mrg-lg-t padd-lg border-color-dark-a20 border-radius-sm'>
                    <div>
                        <span className='font-semibold'>{elem.text}</span>
                    </div>
                    <div>
                        <span className=''>{`${elem.customerId.name} ${elem.customerId.lastname}`}</span>
                    </div>
                </div>
            ))
            : <span className='flex p-10 text-bold text-xl justify-center'>Este profesional aún no recibió opiniones</span>
        }
    </div>
    )
};
