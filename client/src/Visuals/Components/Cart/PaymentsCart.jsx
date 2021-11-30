import PaymentsCartClient from './PaymentsCartClient';
import { getCartInfo } from '../../../ApiReq/cart';
import PaymentsCartPro from './PaymentsCartPro';
import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux';
import ComponentHeader from './../../Components/ComponentHeader';

const PaymentsCart =  () => {
  const userOnPage = useSelector(state=>state.sessionReducer.status);
  const {token} = userOnPage;
  const customerId = useSelector(state => state.sessionReducer.status.id)
  const order= useSelector(state=>state.sessionReducer.status)
  const {isProfessional} = order;
  const [render, setRender] = useState([])
  const [clientRender, setClientRender] = useState([])


  useEffect( () => {
    window.scrollTo(0, 0)
    if(isProfessional){
      getCartInfo(customerId,true,token)
      .then(data => {
        setRender(data)});
        getCartInfo(customerId,false,token)
        .then(data => setClientRender(data));
    }else{
      const payRender =   getCartInfo(customerId,false,token)
      payRender.then(data => setRender(data));
    }

  },[customerId, isProfessional, token]);

  let title;
  (isProfessional) ? title = 'Facturas y Ventas' : title= 'Facturas';

  const componentHeaderData = {
    title: title,
    subtitle: "Información detallada de tus compras en la aplicación.",
    bg: null,// Si esta propiedad se envia null, se asigna un fondo aleatorio.
  }

  return ( 
    <React.Fragment>
      <ComponentHeader data={componentHeaderData} />
      <div>
        {
          !isProfessional 
          ? 
          <div>
            <PaymentsCartClient render={render} />
          </div>
          :
          <div>
            <PaymentsCartClient render={clientRender} />
            <PaymentsCartPro render={render} />
          </div>
        }
      </div>
    </React.Fragment>
  );
}
 
export default PaymentsCart;

