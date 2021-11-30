import React, {useEffect, useState} from 'react';
import FeaturedProfession from "./FeaturedProfession";
import {getCategories} from '../../../ApiReq/constantInfo';

const FeaturedProfessions = () => {

    const [featCateg,setFeatCateg]=useState([])
    useEffect(()=>{
        getCategories(true).then(r=>setFeatCateg(r));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <div>
            <div className="wrapper padd-xl bg-color-light">
                <section>
                    <div className="text-bold font-main font-2x">
                        <span className="border-bottom-color-main padd-md-b padd-lg-r">Profesiones Destacadas</span>
                    </div>
                    <div className="mrg-sm-t">
                        <h1 className="font-xl">Las profesiones más consultadas en LATAM EXPONENTIAL.</h1>
                    </div>
                </section>
            </div>
            <div className="wrapper padd-xl-tb bg-color-extra4-a40">
                <section>
                    {featCateg&&featCateg.map(e=><FeaturedProfession key={e._id} profession={e}/>)}
                </section>
            </div>
        </div>
    );
}

export default FeaturedProfessions;