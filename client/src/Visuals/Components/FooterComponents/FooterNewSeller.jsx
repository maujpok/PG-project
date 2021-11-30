import React from "react";
import logoFooter from "../../Assets/media/logo-main-footer.svg";
import { Link } from 'react-router-dom'

function FooterNewSeller() {
    return (
        <div className="">
            <div className="">
                <img src={logoFooter} alt=''/>
            </div>
            <div className="padd-lg-tb font-color-light">
                <p>Resolvemos tus problemas de una manera eficiente y rapida, no dudes en realizar consultas en nuestra plataforma!</p>
            </div>
            <Link to='/opinion' style={{ "textDecoration": "none" }}>
                <button className="mrg-lg-t padd-md border-radius-sm action action-professional">
                    Dejanos tu opinión
                </button>
            </Link>
        </div>
    )
}

export default FooterNewSeller