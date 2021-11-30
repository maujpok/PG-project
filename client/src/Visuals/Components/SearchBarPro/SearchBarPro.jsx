import React, {useState} from 'react';
import FiltersFields from './FilterFields';
import NameSearch from './NameSearch';
import {useSelector, useDispatch} from 'react-redux'
import { filterProfessional, getAllProfs } from '../../../Controllers/actions/professionalsActions';
import {updateCategCount} from "../../../ApiReq/constantInfo";

const SearchBarPro = () => {
const dispatch = useDispatch();
const professionals = useSelector(state => state.professionalReducer.professionals)

const [data, setData] = useState({
        name: '',
        profesion: '',
        country: '',
        // min: '',
        // max: '',
        likes: '',
});



const [error, setError] = useState(false);
const [errorSubmit,setErrorSubmit] = useState(false);
    // FUNCIONES START FUNCIONES START FUNCIONES START FUNCIONES START

const handleChange = e => {
    setData({
        ...data,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = e => {
    e.preventDefault()

    if(error === true || !Object.values(data).map(e => e === '').includes(false)){
        return setErrorSubmit(true)
    }else{
        if(data.profesion!=='') updateCategCount({name:data.profesion});
        // Aqui despacho la acción
        setErrorSubmit(false);
        dispatch(filterProfessional(data,professionals))
        setData({
            name: '',
            profesion: '',
            country: '',
            // min: '',
            // max: '',
            likes: '',
        })
       
    }
}

// FUNCIONES END FUNCIONES END FUNCIONES END FUNCIONES END FUNCIONES END
     
    return (
        <React.Fragment>
            <div id="offcanvas-search" data-uk-offcanvas="overlay: true;flip: true">
                <div className="uk-offcanvas-bar bg-component-search">
                    <form
                    onSubmit={handleSubmit}
                    >       
                  
                        <div className="padd-lg-b text-center font-color-light font-xl font-main">
                            <div className="padd-sm-b border-bottom-color-main">
                                Búsqueda  Personalizada
                            </div>
                        </div>
                     <NameSearch
                        data={data}
                        setData={setData}
                        handleChange={handleChange}
                        />
                   
                     <FiltersFields
                    data={data}
                    setData={setData}
                    error={error}
                    setError={setError}
                    handleChange={handleChange}
                    />
                    <button 
                    type="submit" 
                    value="Buscar"
                    className="width-100 mrg-lg-t padd-md font-main border-radius-sm action action-search"
                    >Buscar</button>
        
                    </form>
                    <button 
                    type="button" 
                    onClick={() => dispatch(getAllProfs())}
                    className="width-100 mrg-lg-t padd-md font-main border-radius-sm action action-search"
                    >Restablecer</button>
                    {errorSubmit && <div><h3>Verifique sus campos</h3></div>}
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default SearchBarPro;
