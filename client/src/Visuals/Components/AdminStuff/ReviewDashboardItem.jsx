import React from "react";
import * as FaIcons from "react-icons/fa";
import Swal from "sweetalert2";
import {useDispatch} from "react-redux";
import {deleteAdminReview, putAdminReview} from "../../../Controllers/actions/adminActions";

function ReviewDashboardItem({review,token}){
  const dispatch = useDispatch();

  function handleReviewDelete(id){
    return Swal.fire({
      text:`Desea borrar a esta opinión? Esta acción no se puede deshacer.`,
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si',
      confirmButtonColor: "rgba(232,52,84,0.84)",
      cancelButtonColor: "#8c8f9a",
    }).then(result=>{
      if(result.isConfirmed){
        dispatch(deleteAdminReview(id,token));
        Swal.fire({
          text:`Eliminada.`,
          icon:'error',
          confirmButtonColor: "rgba(232,52,84,0.84)"})
      }})
  }
  function handleReviewChange(status,id){
    return Swal.fire({
      text:`Desea cambiar la calificación?`,
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si',
      confirmButtonColor: "rgb(165 220 134)",
      cancelButtonColor: "#8c8f9a",
    }).then(result => {
      if(result.isConfirmed){
        dispatch(putAdminReview({rate:status==="Good"?"Bad":"Good"},id,token))
        Swal.fire({
          text:`Calificación cambiada.`,
          icon:'success',
          confirmButtonColor: "rgb(165 220 134)"})
      }})
  }

    return (
      <div className="col-1-6@xl col-1-4@lg col-1-3@md col-1-1@sm col-1-1@xs padd-md">
        <div className="wrapper padd-md bg-color-extra4-a20 border-color-dark-a20 border-radius-sm shadow-md">
          {/* Review Text */}
          <div className="padd-md font-sm normalize">
            {review.text}
          </div>
          {/* Review Author */}
          <div className="padd-md font-sm flex-bar">
            <div className="text-bold">Autor:</div>
            <span>
              {
                review.userId !== null ? review.userId.username : 'anónimo'
              }
            </span>
          </div>
          {/* Review Rate */}
          <div className="padd-md font-sm flex-bar">
            <div className="text-bold">Calificación:</div>
            {
              review.rate === "Good" ?
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-gray-800">
                  Bueno
                </span>
                :
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-200 text-gray-800">
                  Malo
                </span>
            }
          </div>
          {/* Button Reset Searches */}
          <div className="padd-md font-sm">
            <button
              className="width-100 padd-sm border-radius-sm action action-danger flex-center"
              onClick={()=>handleReviewChange(review.rate,review._id)}
            >
              <FaIcons.FaRedo/>&emsp;Cambiar Estado
            </button>
          </div>          
          {/* Button Change Review */}
          <div className="padd-md font-sm">
              <button
                className="width-100 padd-sm border-radius-sm action action-primary flex-center"
                onClick={()=>handleReviewDelete(review._id)}
              >
                <FaIcons.FaRegTrashAlt/>&emsp;Eliminar
              </button>
          </div>

          
        </div>
      </div>
  )
}

export default ReviewDashboardItem;