import React, {useEffect} from "react";
import * as FaIcons from 'react-icons/fa';
import BasicForm from "./BasicForm";
import {useDispatch, useSelector} from "react-redux";
import {getAllCountries} from "../../../Controllers/actions/constantInfoActions";
import {deleteAdminCountry} from "../../../Controllers/actions/adminActions";
import Swal from 'sweetalert2';

function CountryDashboard({token}){

  const dispatch = useDispatch();
  const allCountries = useSelector(state=>state.constantInfoReducer.countries);
  const countriesDel = useSelector(state=>state.adminReducer.countryDeleted);
  const countriesPost = useSelector(state=>state.adminReducer.countryPosted);

  function handleCountryDelete(name,id){
    return Swal.fire({
              text:`Desea eliminar ${name} de la lista? Esta acción no se puede deshacer.`,
              icon: 'question',
              showCancelButton: true,
              cancelButtonText: 'Cancelar',
              confirmButtonText: 'Si',
              confirmButtonColor: "rgba(232,52,84,0.84)",
              cancelButtonColor: "#8c8f9a",
            }).then(result=>{
              if(result.isConfirmed){
                dispatch(deleteAdminCountry(id,token));
                Swal.fire({
                  text:`${name} eliminado.`,
                  icon:'error',
                  confirmButtonColor: "rgba(232,52,84,0.84)"})
              }})
  }

  useEffect(()=>{
    dispatch(getAllCountries(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[countriesDel,countriesPost]);

  useEffect(()=>{
    if(!allCountries.length) dispatch(getAllCountries(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


  return (
    <React.Fragment>
      {/* Barra de Edicion - Busqueda */}
      <BasicForm component={"countries"}/>
      {/* Listado de Paises */}
      <div className="col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm col-1-1@xs padd-md">
        {
          allCountries && allCountries.map(c=> {
            return (
              <div key={c._id} className="col-1-4@xl col-1-4@lg col-1-4@md col-1-3@md col-1-2@sm col-1-1@xs padd-md">
                <div className="padd-lg bg-color-extra4-a20 border-color-dark-a20 border-radius-sm shadow-md flex-bar">
                  <div className="">
                    {c.name}
                  </div>
                  <span>
                    <button
                      onClick={()=>handleCountryDelete(c.name,c._id)}
                      className="icon-md border-radius-xl font-sm flex-center action action-user-dashboard-cancel shadow-md"
                    >
                      <FaIcons.FaRegTrashAlt/>
                    </button>
                  </span>
                </div>
              </div>
              )
          })
        }
        {/* Paises */}
        {/* 
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              País
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Borrar
            </th>
          </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {allCountries && allCountries.map(c=> {
            return (<tr key={c._id}>
              <td className="px-6 py-2 whitespace-nowrap">
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {c.name}
                    </div>
                  </div>
              </td>
              <td className="px-5 py-4 whitespace-nowrap text-center text-sm font-medium">
                <button onClick={()=>handleCountryDelete(c.name,c._id)}><FaIcons.FaRegTrashAlt/></button>
              </td>
            </tr>)
          })}
          </tbody>
        </table>
        */}        
      </div>
    </React.Fragment>
  )
}

export default CountryDashboard;