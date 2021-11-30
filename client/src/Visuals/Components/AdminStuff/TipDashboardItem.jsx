import React from "react";
import * as FaIcons from "react-icons/fa";
import Swal from "sweetalert2";
import {deleteAdminTip, putAdminTip} from "../../../Controllers/actions/adminActions";
import {useDispatch} from "react-redux";

function TipDashboardItem({tip,tipCateg,token}){
  const dispatch = useDispatch();

  function handleTipDelete(id){
    return Swal.fire({
      text:`Desea borrar este tip? Esta acción no se puede deshacer.`,
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si',
      confirmButtonColor: "rgba(232,52,84,0.84)",
      cancelButtonColor: "#8c8f9a",
    }).then(result=>{
      if(result.isConfirmed){
        dispatch(deleteAdminTip(id, token));
        Swal.fire({
          text:`Tip eliminado.`,
          icon:'error',
          confirmButtonColor: "rgba(232,52,84,0.84)"})}})
  }
  function handleTipChange(status,id){
    return Swal.fire({
      text:`Desea ${!status?'aprobar':'desaprobar'} este tip? Si ${status?'no':''} está aprobado ${status?'no':''} se mostrará en la página.`,
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: `${!status?'Aprobar':'Desaprobar'}`,
      confirmButtonColor: `${!status?'rgb(165 220 134)':'rgba(232,52,84,0.84)'}`,
      cancelButtonColor: "#8c8f9a",
    }).then(result=>{
      if(result.isConfirmed){
        dispatch(putAdminTip({isApproved:!status}, id, token));
        Swal.fire({
          text:`Estado cambiado.`,
          icon:'success',
          confirmButtonColor: "rgb(165 220 134)"})}})
  }

  return (
    <div className="col-1-5@xl col-1-3@lg col-1-3@md col-1-1@sm col-1-1@xs padd-md">
      <div className="wrapper padd-md bg-color-extra4-a20 border-color-dark-a20 border-radius-sm shadow-md">
        {/* Tip Text */}
        <div className="padd-md font-sm normalize">
          {tip.text}
        </div>
        {/* Tip Category */}
        <div className="padd-md font-sm flex-bar">
          <div>Categoría:</div>
          <span>
            {
              tip.categoryId ?
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-400 text-gray-800">
                  { tip.categoryId.name }
                </span>
              :
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-400 text-gray-800">
                  No Aplica
                </span>
            }
          </span>
        </div>
        {/* Tip State */}
        <div className="padd-md font-sm flex-bar">
          <div>Estado:</div>
          <span>
            {
              tip.isApproved ?
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-gray-800">
                Aprobado
              </span>
              :
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-gray-800">
                No aprobado
              </span>
            }
          </span>
        </div>
        {/* Button Reset Searches */}
        <div className="padd-md font-sm">
            <button
              className="width-100 padd-sm border-radius-sm action action-primary flex-center"
              onClick={()=>handleTipChange(tip.isApproved,tip._id)}
            >
              <FaIcons.FaRedo/>&emsp;Cambiar Estado
            </button>
        </div>
        {/* Button Delete */}
        <div className="padd-md font-sm">
          <button
            className="width-100 padd-sm border-radius-sm action action-danger flex-center"
            onClick={()=>handleTipDelete(tip._id)}>
            <FaIcons.FaRegTrashAlt/>&emsp;Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}

export default TipDashboardItem;