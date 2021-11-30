import React   from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import logoMain from "../../Assets/media/logo-main.svg";
import logoMobile from "../../Assets/media/logo-mobile.svg";
import { cleanLoginCheck } from '../../../Controllers/actions/loginAction';
import CartIcon from './CartIcon'
import Swal from 'sweetalert2';


const Nav = () => {

    const loggedUser = useSelector(state=>state.sessionReducer.status)
    const dispatch = useDispatch()
    

    const Logout = async()=>{
        await Swal.fire({
            text: "Confirme que desea cerrar sesión",
            icon: 'warning',
            showCancelButton: true,
            showDenyButton: false,
            confirmButtonText: 'Salir',
            cancelButtonText: `Quedarse`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Adios!',
                    'Nos vemos pronto!',
                    'success'
                )
                dispatch(cleanLoginCheck())
                goAlert()
            }
        })
    }

    function goAlert(){
        
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
        })
        
        Toast.fire({
            icon: 'success',
            title: 'Cerraste sesión'
        })
        return true
}

    let btns = !loggedUser.token ? [{
            title:'Crea tu cuenta',
            url:'/registro'
        },
        {
            title:'Inicia Sesión',
            url: '/ingresar'
        }] : 
        [{
            title:'Mi perfil',
            url: `/miperfil/${loggedUser.username}`
        }]
    btns = [{
            title: 'Inicio',
            url:'/'
        },
        {
            title: 'Soporte',
            url: '/soporte/servicios'
        },
        {
            title: 'Profesionales',
            url:'/profesionales'
        },
        ...btns]

    btns = loggedUser.isAdmin ? [{title: 'Panel de Admin', url:'/admin'},...btns] : [...btns]

    let items = btns.map( (data,i) => {
        return <li key={i}><Link to={data.url}>{data.title}</Link></li>
    })

    return ( 
    <header>
        <nav 
            className="uk-navbar-container uk-margin" 
            data-uk-navbar 
            uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky"
            >
            <div className="uk-navbar bg-color-light width-100">
                <Link className="uk-navbar-item 
                                uk-logo 
                                uk-margin-sm-left" 
                    to="/">
                        <img src={logoMain} alt="LatamExponential" className="element-xl-lg"/>
                        <img src={logoMobile} alt="LatamExponential" className="element-md-sm-xs"/>
                </Link>
                
                <ul 
                    className="uk-navbar-nav 
                            uk-position-right
                            uk-margin-medium-right
                            uk-visible@m"
                >
                    {items}
                    {loggedUser.token && 
                    <>
                        <li>
                            <Link to='/' onClick={Logout}>Salir</Link>
                        </li>
                        <li>
                            <CartIcon/>
                        </li>
                    </>}
                    <button 
                        className="uk-button uk-button-default uk-hidden@m uk-position-right" 
                        type="button" 
                        uk-toggle="target: #offcanvas-nav"  
                        uk-icon="icon: table">
                        </button>
                </ul>

                <button 
                    className="uk-button uk-button-default uk-hidden@m uk-position-right" 
                    type="button" 
                    uk-toggle="target: #offcanvas-nav"  
                    uk-icon="icon: table">
                </button>
                
                <div id="offcanvas-nav" data-uk-offcanvas="overlay: true">
                    <div className="uk-offcanvas-bar">
                        <ul className="uk-nav uk-nav-default">  
                            <li className="uk-nav-header">Menu</li>
                            {items}         
                            {loggedUser.token && 
                                <>
                                    <li>
                                        <Link to='/' onClick={Logout}>Salir</Link>
                                    </li>
                                    <li>
                                        <CartIcon/>
                                    </li>
                                </>}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    
        );
    }
    
    export default Nav;

