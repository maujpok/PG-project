import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAdminReports} from "../../../Controllers/actions/adminActions";

function ReportDashboard({token}){
  const dispatch = useDispatch();
  const allReports = useSelector(state=>state.adminReducer.adminReports);
  const allReasons = {Service:'Servicio', App:'Aplicación', Payment:'Pagos', Account:'Cuenta', Suggestion:'Sugerencias', Other:'Otros'};
  const [reportReason,setReportReason] = useState('Todos');
  let color= {Service:'green',App:'red',Payment:'blue',Account:'yellow',Suggestion:'pink',Other:'gray'};
  function handleChange(ev){
    ev.preventDefault();
    setReportReason(ev.target.value);
  }

  useEffect(()=>{
    if(!Object.keys(allReports).length) dispatch(getAdminReports(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <React.Fragment>
      <div className="col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm col-1-1@xs padd-md">
        <div className="col-1-8@xl col-1-8@lg col-1-5@md padd-md">
          <label className="font-lg font-main text-bold normalize flex-center-left" htmlFor={"name"}>
            Filtrar Reportes:
          </label>
        </div>
        <div className="col-7-8@xl col-7-8@lg col-4-5@md padd-md">
          <select className="uk-select font-sm border-radius-sm" name="reportReason" value={reportReason} onChange={handleChange}>
            <option readOnly>Todos</option>
            {
              allReasons && Object.keys(allReasons).map((elem,index) =>{
                return <option key={index} value={elem} >{allReasons[elem]}</option>
            })}
          </select>
        </div>
      </div>
      <div className="wrapper">
        {/* Listado de Reportes */}
        <div className="col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm col-1-1@xs padd-md" data-uk-height-match=".normalize">
          {allReports && allReports.filter(rep => {
            if (reportReason==='Todos') return true;
            else return rep.reason?rep.reason === reportReason:false;
          }).map( (t, index)=> (<div key={t._id} className="col-1-5@xl col-1-3@lg col-1-3@md col-1-1@sm col-1-1@xs padd-md">
            <div className="wrapper padd-md bg-color-extra4-a20 border-color-dark-a20 border-radius-sm shadow-md">
              <div className="padd-md font-sm flex-bar">
                <div className="text-bold">Autor:</div>
                <span>
                {t.userId?t.userId.username:'usuario no registrado'}
                </span> </div>
              <div className="padd-md font-sm flex-bar">
                <div className="text-bold">Motivo:</div>
                <span>
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${color[t.reason]}-400 text-gray-800`}>
                 { allReasons[t.reason] }
                </span>
                  </span>
              </div>
              <div className="padd-md font-sm flex-bar">
              <div className="text-bold">Mensaje:</div>
              <div className="padd-md font-sm normalize">
                {t.text}
              </div>
              </div>
            </div>
          </div>))}
        </div>
      </div></React.Fragment>)
}
export default ReportDashboard;