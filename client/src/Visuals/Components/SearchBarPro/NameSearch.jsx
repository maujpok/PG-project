import React from 'react'

const NameSearch = ({data,handleChange,}) => {
    return ( 
        <div className=' flex justify-center flex-col space-y-2.5 text-center '>
            <div className="mrg-lg-t">
                <input 
                type="text"
                placeholder='Buscar Profesional por Nombre'
                name='name'
                value={data.name}
                onChange={handleChange}
                autoComplete='off'
                className="uk-input border-radius-sm font-main" />
            </div>
        </div>
    );
}
 
export default NameSearch;
