import React, {useState, useEffect} from 'react';
import ProfessionalCardComponent from './../ProfessionalCardComponent';
import {getProfessionals} from '../../../ApiReq/professionals';

export function FeaturedProfessionals() {

    let [professionals,setProfessionals] = useState([]);
    
    useEffect(()=>{
       getProfessionals('true')
            .then(data => setProfessionals(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <div>
            <div className="wrapper padd-xl bg-color-light">
                <section>
                    <div className="text-bold font-main font-2x">
                        <span className="border-bottom-color-main padd-md-b padd-lg-r">Profesionales Destacados</span>
                    </div>
                    <div className="mrg-lg-t font-lg">
                        Los profesionales con mejor de reputación merecen ser reconocidos, agéndate con ellos a solo un click!
                    </div>
                </section>
            </div>
            <div className="wrapper padd-xl-tb bg-color-extra4-a40">
                <section>
                    <div data-uk-slider="autoplay: true;" className="col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm col-1-1@xs">
                        <ul className="uk-slider-items">
                        {
                            professionals && professionals.map(function (professionalData, index) {
                                //return <FeaturedProfessional key={index} data={professionalData} />
                                return  <div key={index} className="col-1-5@xl col-1-4@lg col-1-3@md col-1-2@sm col-1-1@xs padd-lg">
                                            <ProfessionalCardComponent data={professionalData} />
                                        </div>
                            })
                        }
                        </ul>
                        <div className="wrapper flex-center">
                            <ul className="uk-slider-nav uk-dotnav"></ul>
                        </div>
                    </div>         
                </section>
            </div>
        </div>
    )
}
export default FeaturedProfessionals;