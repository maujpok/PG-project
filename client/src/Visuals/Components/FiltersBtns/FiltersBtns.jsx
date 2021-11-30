import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import '../../Assets/CustomAR.css'
import {useSelector, useDispatch} from 'react-redux'
import { filterProfessional } from '../../../Controllers/actions/professionalsActions';
import {updateCategCount} from '../../../ApiReq/constantInfo'

const FiltersBtns = () => {
let history = useHistory();
const dispatch = useDispatch();
const categories = useSelector(state => state.constantInfoReducer.categories);
const professionals = useSelector(state => state.professionalReducer.professionals);
const countries = useSelector(state => state.constantInfoReducer.countries)

const categoriesRender = categories.map(data => {
    const opt = <option key={data.name} value={data.name}>{data.name}</option>;
    return opt;
});
const countriesRender = countries.map(data => {
    const opt = <option key={data.name} value={data.name}>{data.name}</option>;
    return opt;
});

const [data, setData] = useState({
    country: '',
    profesion: '',
});
const [invalid, setInvalid] = useState(true)

const handleChange = e => {
    setData({
        ...data,
        [e.target.name]: e.target.value
    })
}
useEffect(() => {
    if(Object.values(data).map(e => e === "")[1] === false){
    return setInvalid(false);
    }
return setInvalid(true);
}, [data]);

const handleSubmit = e => {
    e.preventDefault();
    if(data.profesion!=='') updateCategCount({name:data.profesion});
    dispatch(filterProfessional(data,professionals))
    setData({
        country: '',
        profesion: '', 
    });
    setInvalid(true);
    history.push('./profesionales')
}

    return ( 
        <form onSubmit={handleSubmit} >
            <div className="width-100 text-bold text-center font-color-main font-main">
                <span className="element-xl-lg-md font-2x">Consultas profesionales a un click!</span>
                <span className="element-sm-xs font-xl">Consultas profesionales a un click!</span>
            </div>
            <div>
                <label className="wrapper padd-md-tb font-xl font-color-light font-main">
                    Profesionales
                </label>
                <select
                    onChange={handleChange}
                    name='profesion'
                    value={data.profesion}
                    className='inputsFiltersBtns* uk-select width-100 bg-color-transparent border-radius-sm border-color-light pg-custom'
                >
                    <option readOnly>Seleccionar Profesión</option>
                    {categoriesRender}
                </select>
            </div>                
            <div>
                <label className="wrapper mrg-md-t padd-md-tb font-xl font-color-light font-main">
                    Países
                </label>
                <select
                    onChange={handleChange}
                    name='country'
                    value={data.country}
                    className='inputsFiltersBtns* uk-select width-100 bg-color-transparent border-radius-sm border-color-light pg-custom' 
                >
                    <option readOnly>Seleccionar País</option>
                    {countriesRender}
                </select>
            </div>    
            <div>  
                    <input 
                        className="btnFiltersBtns* width-100 mrg-xl-t padd-md-tb font-main border-radius-sm font-xl action action-slogan"
                        type="submit" 
                        value="Buscar"
                        disabled={invalid}
                    />
            </div>  
        </form>
    );
}
 
export default FiltersBtns;