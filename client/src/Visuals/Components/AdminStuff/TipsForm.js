import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postAdminTip} from "../../../Controllers/actions/adminActions";
import Swal from 'sweetalert2';
import {getAllCategories} from "../../../Controllers/actions/constantInfoActions";

function TipsForm(){
  const dispatch = useDispatch();
  const allCategories = useSelector(state=>state.constantInfoReducer.categories);
  const userOnPage = useSelector(state=>state.sessionReducer.status);
  const {token} = userOnPage;
  const clearTipForm = {text:'',userId:userOnPage.id,isApproved:true,categoryId:''}
  const [info,setInfo] = useState(clearTipForm);

  useEffect(()=>{
    if(allCategories.length===0) dispatch(getAllCategories(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  function handleChange(ev){
    setInfo({...info,[ev.target.name]:ev.target.value});
  }
  function handleSubmitTip(ev){
    ev.preventDefault();
    if(info.categoryId==='') {
      Swal.fire({
        text: `Elije una categoría!`,
        icon: 'error',
        confirmButtonColor: "rgba(232,52,84,0.84)"
      });
      return;
    }
    if(info.categoryId!=='') {
      dispatch(postAdminTip(info, token));
      Swal.fire({
        text: `Tip agregado!`,
        icon: 'success',
        confirmButtonColor: "rgb(165 220 134)"
      });
    }
    setInfo(clearTipForm);
  }

  return (
    <div className="col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm col-1-1@xs padd-md" data-uk-height-match=".normalize">
      <form onSubmit={handleSubmitTip}>
        <div className="col-1-8@xl col-1-8@lg col-1-5@md padd-md">
          <label className="font-lg font-main text-bold normalize flex-center-left" htmlFor={"name"}>
            Agregar Tip:
          </label>
        </div>
        <div className="col-4-8@xl col-4-8@lg col-2-5@md padd-md font-sm">
          {/*<label className="m-2" htmlFor={"name"}>Nuevo tip: </label><br/>*/}
          <textarea
            rows={(window.innerWidth >= 960) ? 1 : 6}
            className="uk-textarea width-100 border-radius-sm normalize"
            name="text"
            value={info.text}
            onChange={handleChange}
            required={true}
            placeholder="Escriba aqui el tip que desea agregar."
          />
        </div>
        <div className="col-2-8@xl col-2-8@lg col-1-5@md padd-md font-sm">
          <select
            className="uk-select width-100 border-radius-sm normalize"
            name="categoryId"
            value={info.categoryId}
            onChange={handleChange}
          >
            <option readOnly>Categoría</option>
            {allCategories&&allCategories.map(c=><option key={c._id} value={c._id} >{c.name}</option>)}
          </select>
        </div>
        <div className="col-1-8@xl col-1-8@lg col-1-5@md padd-md font-sm">
          <input
            type="submit"
            className="padd-md border-radius-sm font-sm action action-add-post normalize"
            value="Agregar tip"
          />
        </div>
      </form>
    </div>
  );
}
export default TipsForm;