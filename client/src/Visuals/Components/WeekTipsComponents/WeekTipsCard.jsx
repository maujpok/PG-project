import React from 'react'

function WeekTipsCard({text}) {
    return (
        <li>
            <div className="uk-position-center col-1-2@xl col-1-2@lg col-2-3@md col-4-5@sm col-4-5@xs">
                <div className="uk-position-center text-bold text-center text-italic text-shadow-md font-main font-color-light">
                    <div className="element-xl-lg-md font-2x">{text}</div>
                    <div className="element-sm-xs font-xl">{text}</div>
                </div>                
            </div>
        </li>
    )
}

export default WeekTipsCard
