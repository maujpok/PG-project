import React from 'react'

function ShowData({title, data, divClass, spanClass, pClass}) {
    return (
        <div className={divClass}>
            <span className={spanClass}>{title}</span>
            <p className={pClass}>{data}</p>
        </div>
    )
}

export default ShowData
