import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAdminReviews} from "../../../Controllers/actions/adminActions";
import ReviewDashboardItem from "./ReviewDashboardItem";

function ReviewDashboard({token}){
  const dispatch = useDispatch();
  const allReviews = useSelector(state=>state.adminReducer.adminReviews);
  const reviewDeleted = useSelector(state=>state.adminReducer.reviewDeleted);
  const reviewModified = useSelector(state=>state.adminReducer.reviewModified);
  const [reviewsSearch,setReviewsSearch] = useState([]);
  const [search,searchHappened] = useState(false);

  function handleSearch(e){
    e.preventDefault();
    searchHappened(true);
    let searchValue = e.target.value;
    if(searchValue==='') {
      setReviewsSearch([]);
      searchHappened(false);
      return;
    }
    setReviewsSearch(allReviews.filter(r=>{
      if(!r.userId) return false;
      return (r.userId.username.includes(searchValue)||r.userId.username.includes(searchValue.slice(0,1).toUpperCase()+searchValue.slice(1)));
    }));
  }
  function shownReviews(){
   if (reviewsSearch.length>0) return reviewsSearch.slice(0,12);
    else return allReviews && allReviews.slice(0,12);
  }

  useEffect(()=>{
    dispatch(getAdminReviews(token));
  },[reviewDeleted, reviewModified, dispatch, token]);

  useEffect(()=>{
    if(!allReviews.length) dispatch(getAdminReviews(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <React.Fragment>
      <form>
        <div className="col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm col-1-1@xs padd-md flex-center-xl-lg-md">
          <div className="col-1-6@xl col-1-6@lg col-1-4@md col-1-1@sm col-1-1@xs padd-md">
            <label className="font-lg font-main text-bold normalize flex-center-left" htmlFor={"name"}>
              Filtrar Opiniones:
            </label>
          </div>
          <div className="col-5-6@xl col-5-6@lg col-3-4@md col-1-1@sm col-1-1@xs padd-md">
            <input
              className="uk-input border-radius-sm font-sm normalize"
              type="text"
              name="username"
              defaultValue=""
              onChange={handleSearch}
              autoComplete="off"
              placeholder="Nombre de usuario"
            />
          </div>
          {/*
            <input
              type="submit"
              className="border rounded-b width-80 text-xs font-medium text-gray-400 uppercase tracking-wide"
              value="username"
            />
          */}   
          
          {((reviewsSearch.length===0)&&search)?<div className="width-80 uk-margin-top text-xs font-medium text-red-600">No hay resultados</div>:' '} 
        </div>
      </form>
      <div className="col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm col-1-1@xs padd-md" data-uk-height-match=".normalize">
        {
          shownReviews().map(r => <ReviewDashboardItem key={r._id} review={r} token={token}/>)
        }
        {/*
        <div className="flex flex-col ">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-3">
            <div className="py-2 align-middle inline-block min-w-min sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Texto
                    </th>
                    <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Autor
                    </th>
                    <th scope="col" className="px-2 py-3 text-left text-xs font-medium whitespace-nowrap text-gray-500 uppercase tracking-wider">
                      Calificación
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium whitespace-nowrap text-gray-500 uppercase tracking-wider">
                      Cambiar calificación
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Borrar
                    </th>
                  </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                  {shownReviews().map(r => <ReviewDashboardItem key={r._id} review={r} token={token}/>)}
                  </tbody>
                </table>
              </div></div></div></div>
        */}
      </div>
    </React.Fragment>
  )
}
export default ReviewDashboard;