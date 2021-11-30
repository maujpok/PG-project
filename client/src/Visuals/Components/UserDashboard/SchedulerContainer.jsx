import React, {useEffect} from "react";
import SchedulerCancel from "./SchedulerCancel";
import SchedulerRecurrent from "./SchedulerRecurrent";

export default function SchedulerCont ({userId}){
    
    useEffect(() => {
        window.scrollTo(0, 0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className="col-1-1@xl col-1-1@lg col-1-1@md col-1-1@sm col-1-1@xs padd-lg bg-color-light border-color-dark-a20 border-radius-sm shadow-lg normalize">
            <SchedulerRecurrent userId={userId}/>
            <SchedulerCancel userId={userId}/>
        </div>
    )
}