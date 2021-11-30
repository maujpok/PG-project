import React, { useEffect } from 'react'
import SearchBarPro from '../Components/SearchBarPro/SearchBarPro'
import ProfesionalsCatalog from '../Components/ProfessionalCard/ProfessionalsCatalog'
import {useDispatch, useSelector} from "react-redux"
import { getAllProfs } from '../../Controllers/actions/professionalsActions'
import { getAllCategories, getAllCountries } from '../../Controllers/actions/constantInfoActions'


export default function Profesionals() {
    const dispatch= useDispatch()

    const profs =  useSelector(state => state.professionalReducer.professionalsRender)
    useEffect(() => {
        window.scrollTo(0, 0)
        if(!profs.length){
            dispatch(getAllProfs())
        }
            dispatch(getAllCountries())
            dispatch(getAllCategories())
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <React.Fragment>
            <div className="wrapper bg-professionals-title">
                <div className="wrapper padd-xl bg-color-light-a80">
                    <section className="flex-center-xl-lg-md">
                        <div className="col-5-6@xl col-4-5@lg col-2-3@md col-1-1@sm col-1-1@xs">
                            <div className="text-bold font-main font-2x">
                                <span className="border-bottom-color-main padd-md-b padd-lg-r">Profesionales</span>
                            </div>
                            <div className="mrg-sm-t">
                                <h1 className="font-xl">Las profesiones más consultadas en LATAM EXPONENTIAL.</h1>
                            </div>
                        </div>
                        <div className="col-1-6@xl col-1-5@lg col-1-3@md col-1-1@sm col-1-1@xs">
                            <div 
                                className="width-100 mrg-lg-t padd-md font-main border-radius-sm action action-search-bar flex-center" 
                                data-uk-toggle="target: #offcanvas-search">
                                Buscar Profesionales
                                <span className="mrg-md-l" uk-icon="icon: search"></span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="wrapper mrg-lg-t" data-uk-height-match=".normalize">
                <section>
                    <ProfesionalsCatalog/>
                </section>
            </div>
            <SearchBarPro />
        </React.Fragment>
    )
}