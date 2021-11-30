import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAdminTips} from "../../../Controllers/actions/adminActions";
import TipsForm from "./TipsForm";
import TipDashboardItem from "./TipDashboardItem";

function TipDashboard({token}){
  const dispatch = useDispatch();
  const allTips = useSelector(state=>state.adminReducer.adminTips);
  const allCategories = useSelector(state => state.constantInfoReducer.categories);
  const tipDeleted = useSelector(state=>state.adminReducer.tipDeleted);
  const tipModified = useSelector(state=>state.adminReducer.tipModified);
  const tipPosted = useSelector(state=>state.adminReducer.tipPosted);
  const [tipCateg,setTipCateg] = useState('Todas'); //allCategories[0]._id

  function handleChange(ev){
    ev.preventDefault();
    setTipCateg(ev.target.value);
  }

  useEffect(()=>{
    dispatch(getAdminTips(token));
  },[tipPosted, tipDeleted, tipModified, dispatch, token]);

  useEffect(()=>{
    if(!allTips.length) dispatch(getAdminTips(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <React.Fragment>
      <TipsForm />
      <div className="col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm col-1-1@xs padd-md">
        <div className="col-1-8@xl col-1-8@lg col-1-5@md padd-md">
          <label className="font-lg font-main text-bold normalize flex-center-left" htmlFor={"name"}>
            Filtrar Tips:
          </label>
        </div>
        <div className="col-7-8@xl col-7-8@lg col-4-5@md padd-md">
          <select className="uk-select font-sm border-radius-sm" name="categoryId" value={tipCateg} onChange={handleChange}>
            <option readOnly>Todas</option>
            {
              allCategories && allCategories.map(c => <option key={c._id} value={c._id} >{c.name}</option>)
            }
          </select>
        </div>
      </div>      
      <div className="wrapper">
        {/* Listado de Tips */}
        <div className="col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm col-1-1@xs padd-md" data-uk-height-match=".normalize">
             {
                allTips && allTips.filter(t => {
                   if (tipCateg==='Todas') return true;
                   else return t.categoryId?t.categoryId._id === tipCateg:false;
                }).map(t=> <TipDashboardItem key={t._id} tip={t}  token={token} tipCateg={tipCateg}/>)
             }
        </div>
      </div>
    </React.Fragment> 
  )
}

export default TipDashboard;