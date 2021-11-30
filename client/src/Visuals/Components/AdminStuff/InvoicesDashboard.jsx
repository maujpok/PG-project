import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAdminInvoices} from "../../../Controllers/actions/adminActions";

function InvoicesDashboard({token}){
  const dispatch = useDispatch();
  const allInvoices = useSelector(state=>state.adminReducer.adminInvoices);
  const [invoicesSearch,setInvoicesSearch] = useState([]);
  const [search,searchHappened] = useState(false);

  useEffect(()=>{
      dispatch(getAdminInvoices(token));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

  function handleSearch(e){
    e.preventDefault();
    searchHappened(true);
    let searchValue = e.target.value;
    allInvoices[0].length && setInvoicesSearch(allInvoices[0].filter(u=> {
      return (
        u.orderID.includes(searchValue)
        || u.customerId?.username.toLowerCase().includes(searchValue.toLowerCase())
      );
    }))
  }
  function resultsToShow(){
    if (invoicesSearch.length>0) return invoicesSearch;
    else return allInvoices[0];
  }
  return (
    <React.Fragment>
        <div className="col-1-1@xl col-1-1@lg col-1-1@md padd-md flex-center-xl-lg-md">
          <div className="col-1-8@xl col-1-5@lg col-1-1@xs padd-md">
            <div className="font-lg font-main text-bold">
              <span>Buscar Facturas:</span>
            </div>
          </div>
          <div className="col-7-8@xl col-4-5@lg col-1-1@xs padd-md">
            <input
              type="text"
              name="username"
              defaultValue=""
              onChange={event => handleSearch(event)}
              className="uk-input font-sm border-radius-sm"
              autoComplete="off"
              placeholder="Buscar por nombre de cliente o número de orden"
            />
          </div>
        </div>
      {
        ((invoicesSearch.length===0)&& search)?
          <div className="col-1-1@xl col-1-1@lg col-1-1@md padd-lg">
            <div className="bg-color-extra4-a20 border-radius-sm height-25vh font-lg text-bold text-red-600 flex-center">
              Ningua factura coincide con el concepto de búsqueda.
            </div>
          </div> :
          <div className="col-1-1@xl col-1-1@lg padd-md" data-uk-height-match=".normalize">
            {resultsToShow()?.slice(0,9).map(i => {
       return (
         <div key={i._id} className="col-1-4@xl col-1-3@lg col-1-3@md col-1-1@sm col-1-1@xs padd-md">
             <div className="wrapper padd-md bg-color-extra4-a20 border-color-dark-a20 border-radius-sm shadow-md normalize">                 {/* invoice data */}
                  <div className="padd-md font-sm flex-bar">
                    <div className="text-bold">Cliente:</div>
                    <span>
                      {i.customerId.username}
                      </span>
                  </div>
                  <div className="padd-md font-sm flex-bar">
                    <div className="text-bold">Fecha de compra:</div>
                    <span>
                       {i.date.slice(0,10)}
                      </span>
                  </div>
                   {/* Hired Prof */}
                   <div className="padd-md font-sm flex-bar">
                      <div className="text-bold">Profesional contratado:</div>
                      <span>
                       {i.description}
                      </span>
                    </div>
                    {/* Order */}
                    <div className="padd-md font-sm flex-bar">
                      <div className="text-bold">N° de Orden:</div>
                      <span>
                       {i.orderID}
                      </span>
                    </div>
               <div className="padd-md font-sm flex-bar">
                 <div className="text-bold">Cantidad de sesiones:</div>
                 <span>
                       {i.numberOfSessions}
                      </span>
               </div>
             </div>
                   {/* Button Change Review */}
                   {/*<div className="padd-md font-sm">*/}
                   {/*    <button*/}
                   {/*      className="width-100 padd-sm border-radius-sm action action-primary flex-center"*/}
                   {/*      onClick={()=>handleReviewDelete(review._id)}*/}
                   {/*    >*/}
                   {/*      <FaIcons.FaRedo/>&emsp;Cambiar Estado*/}
                   {/*    </button>*/}
                   {/*</div>*/}
         </div>
       )
        //customerId.username
        //date
        //totalCost
        //schedules[] date.shortcut
        //description
        //numberOfSessions
        //orderID
      })}
          </div>
      }
    </React.Fragment>
      )
}

export default InvoicesDashboard;
