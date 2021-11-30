import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postAdminCategory,postAdminCountry,postAdminTip,putAdminCategory} from "../../../Controllers/actions/adminActions";
import Swal from 'sweetalert2';

function BasicForm({component}){
  const dispatch = useDispatch();
  const allCategories = useSelector(state=>state.constantInfoReducer.categories);
  const allCountries = useSelector(state=>state.constantInfoReducer.countries);
  const userOnPage = useSelector(state=>state.sessionReducer.status);
  const {token} = userOnPage;
  const allInfo = {categories:{name:'',searchCount:0,img:''},countries:{name:''},tips:{text:'',userId:userOnPage.id,isApproved:true}};
  const [info,setInfo] = useState(allInfo[component]);
  function handleChange(ev){
    setInfo({...info,[ev.target.name]:ev.target.value});
  }

  function handleSubmitCat(ev){
    ev.preventDefault();
    if(info.name==='') return;
    if(!(allCategories.find(c=>c.name===info.name))){
      if (info.img !== '') {
        dispatch(postAdminCategory(info, token));
        Swal.fire({
          text:`Categoría creada!`,
          icon:'success',
          confirmButtonColor: "rgb(165 220 134)"});
      }
      else return;
    }
    else {
      let id = allCategories.filter(c => c.name === info.name)[0]._id;
      let data = (info.img!=='') ? {img: info.img} : {};
      data = (info.searchCount===0)? data : {...data,searchCount:info.searchCount};
      dispatch(putAdminCategory(id, data, token));
      Swal.fire({
        text:`Categoría modificada!`,
        icon:'success',
        confirmButtonColor: "rgb(165 220 134)"});
    }
    setInfo(allInfo[component]);
  }

  function handleSubmitCountry(ev){
    ev.preventDefault();
    if (allCountries.find(c=>c.name===info.name)) {
      Swal.fire({
        text:`${info.name} ya se encuentra en la lista!`,
        icon:'error',
        confirmButtonColor: "rgba(232,52,84,0.84)"});
      setInfo(allInfo[component]);
    } else if (info.name!=='') {
      dispatch(postAdminCountry(info, token));
      Swal.fire({
        text:`País agregado!`,
        icon:'success',
        confirmButtonColor: "rgb(165 220 134)"});
      setInfo(allInfo[component]);
    }
  }

  function handleSubmitTip(ev){
    ev.preventDefault();
    dispatch(postAdminTip(info, token));
    Swal.fire({
      text:`Tip agregado!`,
      icon:'success',
      confirmButtonColor: "rgb(165 220 134)"});
    setInfo(allInfo[component]);
  }

  if (component==='categories') return (
    <div className="col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm col-1-1@xs padd-md" data-uk-height-match=".normalize">
      <form autoComplete="off" onSubmit={(ev)=>handleSubmitCat(ev)}>
        <div className="col-1-5@xl col-1-1@lg padd-md normalize flex-center-left">
          <label className="font-lg font-main text-bold" htmlFor={"name"}>
            Agregar / Editar Categoría:
          </label>
        </div>
        
        <div className="col-1-5@xl col-1-4@lg padd-md normalize">
          <label className="wrapper padd-md-b padd-md-lr font-sm" htmlFor={"name"}>
            Nombre
          </label>
          <input
            className="uk-input border-radius-sm font-sm"
            name="name"
            type={"text"}
            value={info.name}
            onChange={(ev)=>handleChange(ev)}
            required={true}
            placeholder="Categoría"
          />
        </div>
        
        <div className="col-1-5@xl col-1-4@lg padd-md normalize">
          <label className="wrapper padd-md-b padd-md-lr font-sm" htmlFor={"searchCount"}>
            Cantidad de búsquedas
          </label>
          <input
            className="uk-input border-radius-sm font-sm"
            name="searchCount"
            type="number"
            step={1}
            min={0}
            value={info.searchCount}
            onChange={ev=>handleChange(ev)}
            required={true}
            placeholder="Cantidad de búsquedas"
          />
        </div>
        
        <div className="col-1-5@xl col-1-4@lg padd-md normalize">
          <label className="wrapper padd-md-b padd-md-lr font-sm" htmlFor={"img"}>
            URL imagen
          </label>
          <input
            className="uk-input border-radius-sm font-sm"
            name="img"
            type="url"
            value={info.img}
            onChange={(ev)=>handleChange(ev)}
            placeholder="Imagen"
          />
        </div>
        
        <div className="col-1-5@xl col-1-4@lg padd-md normalize position-relative">
          <div className={`${window.innerWidth > 960 ? 'uk-position-bottom padd-md' : 'mrg-lg-t'}`}>
            <input
              type="submit"
              className="padd-md border-radius-sm font-sm action action-add-post"
              value="Agregar / editar categoría"/>
          </div>
        </div>
      </form>

    </div>
  );

  if (component==='tips') return (
    <form className="m-5 border-2 width-20 bg-gray-100 rounded-md" autoComplete="off" onSubmit={(ev)=>handleSubmitTip(ev)}>
      <label className="m-2" htmlFor={"name"}>Nuevo tip: </label><br/>
      <textarea className="form-textarea mt-1 block w-full" name="text" value={info.text} onChange={(ev)=>handleChange(ev)} required={true}/>
      <input type="submit" className="font-bold border-1 rounded-b bg-color-dark-a10 hover:bg-gray-300" value="Agregar tip"/>
    </form>);

  if (component==='reviews') return (
    <form className="m-5 border-2 width-20 bg-gray-100 rounded-md" autoComplete="off" onSubmit={(ev)=>handleSubmitTip(ev)}>
      <label className="m-2" htmlFor={"name"}>Nueva opinión: </label><br/>
      <textarea className="form-textarea mt-1 block w-full" name="text" value={info.text} onChange={(ev)=>handleChange(ev)} required={true}/>
      <input type="submit" className="font-bold border-1 rounded-b bg-color-dark-a10 hover:bg-gray-300" value="Agregar tip"/>
    </form>);

  if (component==='countries') return (
    <div className="col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm col-1-1@xs padd-md" data-uk-height-match=".normalize">
      <form autoComplete="off" onSubmit={(ev)=>handleSubmitCountry(ev)}>
        <div className="col-1-8@xl col-1-8@lg col-1-4@md col-1-1@sm col-1-1@xs padd-md">
          <label className="font-lg font-main text-bold normalize flex-center-left" htmlFor={"name"}>
            Agregar País:
          </label>
        </div>
        <div className="col-6-8@xl col-6-8@lg col-2-4@md col-1-1@sm col-1-1@xs padd-md">
          <input
            className="uk-input border-radius-sm font-sm normalize"
            name="name"
            type={"text"}
            value={info.name}
            onChange={(ev)=>handleChange(ev)}
            required={true}
            placeholder="Escriba aquí el nombre del país que desea agregar"
          />
        </div>
        <div className="col-1-8@xl col-1-8@lg col-1-4@md col-1-1@sm col-1-1@xs padd-md">
          <input
            type="submit"
            className="padd-md border-radius-sm font-sm action action-add-post normalize"
            value="Agregar País"
          />
        </div>
      </form>
    </div>
  );
}
export default BasicForm;