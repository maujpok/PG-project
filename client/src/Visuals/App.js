import React from 'react';
import Home from './Containers/Home';
import './App.css';
import './Assets/css/app.settings.css';
import './Assets/css/app.core.css';
import './Assets/css/app.actions.css';
import './Assets/css/app.custom.css';
import { Route, Switch  } from 'react-router-dom';
import Footer from '../Visuals/Components/FooterComponents/Footer'
import Nav from '../Visuals/Components/NavComponent/Nav'
import LoginComponentsContainer from './Components/LoginComponents/LoginComponentsContainer';
import Dashboard from './Containers/Dashboard';
import Register from './Containers/Register';
import Professionals from './Containers/Professionals';
import Supports from './Containers/Supports'
import ProfessionalDashboard from './Components/ProfessionalsComponents/ProfessionalDashboard';
import AdminPanel from "./Containers/AdminPanel";
import Cart from './Components/Cart/Cart';
import PaymentsCart from './Components/Cart/PaymentsCart';
import Terms from './Containers/Terms';
import PrivacyPolicy from './Containers/PrivacyPolicy';
import SalesPolicy from './Containers/SalesPolicy';
import Faq from './Containers/Faq';
import Review from './Components/Review/Review';
import MeetGuide from './Containers/MeetGuide';
import ManageSchedule from './Components/ProfessionalsComponents/ManageSchedule';
import Nosotros from './Containers/Nosotros'
import "@material-tailwind/react/tailwind.css";
import ContactForm from './Components/ContactForm';
import ForgotPassword from './Components/ResetPassword/ForgotPassword'
import Meet from './Components/Meet/Meet';




function App() {

  return (
    <div>
        <Nav />
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/ingresar'
          render={({match})=><LoginComponentsContainer match={match}/>}>
        </Route>
        <Route path='/profesionales/:username'>
          <ProfessionalDashboard/>
        </Route>
        <Route path='/:username/horarios'>
          <ManageSchedule/>
        </Route>      
        <Route path='/miperfil/:username'
          render={({match})=><Dashboard match={match}/>}>
        </Route>
        <Route path='/registro'>
          <Register/>
        </Route>
        <Route path='/profesionales'>
          <Professionals/>
        </Route>
        <Route path='/soporte'>
          <Supports/>
        </Route>
        <Route path='/admin'>
          <AdminPanel/>
        </Route>
        <Route path="/carrito">
          <Cart/>
        </Route>
        <Route path="/soporte">
          <Supports/>
        </Route>
        <Route path="/facturas">
          <PaymentsCart/>
        </Route>
        <Route path="/terminos-y-condiciones">
          <Terms/>
        </Route>
        <Route path="/politica-de-privacidad">
          <PrivacyPolicy/>
        </Route>
        <Route path="/politica-de-ventas">
          <SalesPolicy/>
        </Route>
        <Route path="/preguntas-frecuentes">
          <Faq/>
        </Route>
        <Route path="/guia-meet">
          <MeetGuide/>
        </Route>
        <Route path="/opinion">
          <Review/>
        </Route>
        <Route path="/nosotros">
          <Nosotros/>
        </Route>
        <Route path="/contacto">
          <ContactForm/>
        </Route>
        <Route path="/resetear">
          <ForgotPassword/>
        </Route>
        <Route path="/reunion/:roomName/:displayName"
          render={({match})=><Meet match={match}/>}>
        </Route>
      </Switch>
        <Footer/>
    </div>
  );
}

export default App;
