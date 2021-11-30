import React from 'react'
import * as FaIcons from 'react-icons/fa';

function FooterContact() {

    const contactLinks = [
        {name: 'Instagram', url:'https://www.instagram.com', class: 'instagram', icon: <FaIcons.FaInstagram className="display-inline"/>},
        {name: 'Twitter', url:'https://www.twitter.com', class: 'twitter', icon: <FaIcons.FaTwitter className="display-inline"/>},
        {name: 'Facebook', url:'https://www.facebook.com', class: 'facebook', icon: <FaIcons.FaFacebookF className="display-inline"/>},
        {name: 'Whatsapp', url:'https://www.whatsapp.com', class: 'whatsapp', icon: <FaIcons.FaWhatsapp className="display-inline"/>},
        {name: 'Youtube', url:'https://www.youtube.com', class: 'youtube', icon: <FaIcons.FaYoutube className="display-inline"/>},
    ]

    return (
        <React.Fragment>
            <div className="font-color-light font-main font-xl">

                <span className="padd-md-b padd-lg-r font-bold border-bottom-color-main">Síguenos en redes!</span>
      
            </div>
            <div className="mrg-lg-t">
                <ul className="vertical-list mrg-lg-t">
                    {
                        contactLinks?.map((elem, index) => {
                            // const Icon = (Icon) => <Icon/>;
                            return  <li key={index} className="mrg-lg-t">
                                        <a href={elem.url} target="_blank" rel="noreferrer" className="action action-footer-link">
                                        {elem.icon}
                                        <span>&emsp;{elem.name}</span>
                                        </a>
                                    </li>
                        })
                    }
                </ul>
            </div>
        </React.Fragment>
    )
}

export default FooterContact