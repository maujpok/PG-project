// import React, {useEffect} from 'react'
import React from 'react'

import {useSelector} from 'react-redux'

const FiltersFields = ({data,handleChange,setError, error}) => {

const categories = useSelector(state => state.constantInfoReducer.categories);
const countries = useSelector(state => state.constantInfoReducer.countries)

    
    const likes = [
        {range:'Iniciado'},
        {range:'Intermedio'},
        {range:'Popular'},
    ]


    const categoriesRender = categories.map((data,index) => {
        const opt = <option key={index} readOnly value={data.name}>{data.name}</option>;
        return opt;
    });
    const countriesRender = countries.map((data,index) => {
        const opt = <option key={index} readOnly value={data.name}>{data.name}</option>;
        return opt;
    });
    const likesRender = likes.map((data,index) => {
        const opt = <option  key={index} readOnly value={data.range}>{data.range}</option>
        return opt
    });



// useEffect(() => {
//    if(Number(data.min) < 0 || Number(data.max) < 0){
//      setError(true)
//    }else{
//        if(Number(data.min) > Number(data.max)){
//         setError(true)
//        }else{
//            setError(false)
//        }
//    }
// })
//<div className=' flex justify-center flex-col space-y-2.5 text-center'>
    return ( 
    <div className='wrapper'>
        <div className="mrg-lg-t">
            <select

                onChange={handleChange}
                name='profesion'
                value={data.profesion}
                className='inputsFiltersBtns uk-select font-main border-radius-sm'
            >
            <option>Seleccionar Profesión</option>
            {categoriesRender}
            </select>
        </div>
        <div className="mrg-lg-t">
            <select
                
                onChange={handleChange}
                name='country'
                value={data.country}
                className='inputsFiltersBtns uk-select font-main border-radius-sm' 
            >
            <option>Seleccionar País</option>
            {countriesRender}
            </select>  
        </div>
        <div className="mrg-lg-t">
            <select
                onChange={handleChange}
                name='likes'
                value={data.likes}
                className='inputsFiltersBtns uk-select font-main border-radius-sm' 
            >
            <option>Seleccionar Reputación</option>
            {likesRender}
            </select>  
        </div>


        <div className='padd-lg-b text-center font-color-light font-md font-main'>
       
       
          {/* <div>
            <input
                 
                type="number" 
                placeholder='Presupuesto mínimo USD'
                name='min'
                value={data.min}
                onChange={handleChange}
                className='uk-input mrg-lg-t border-radius-sm font-main'
            />
            <input 
                
                type="number" 
                placeholder='Presupuesto máximo USD'
                name='max'
                value={data.max}
                onChange={handleChange}
                className='uk-input mrg-lg-t border-radius-sm font-main'
            />
          </div> */}
        {error && <h3 className="padd-sm-b border-bottom-color-main">Los montos no son válidos</h3>}
        </div>
       
    </div>
     );
}
 
export default FiltersFields;
