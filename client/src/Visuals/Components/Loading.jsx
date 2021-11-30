import React from 'react'

function Loading({divClass, imgClass}) {
    const divC = divClass || 'flex justify-center items-center h-screen w-screen'
    const imgC = imgClass || 'w-96 h-96'
    return (
        <div className={divC}>
            <img    className={imgC}
                    src='https://cdn.discordapp.com/attachments/902284628621148220/905988293819240548/Ripple-1s-200px.gif' 
                    alt='loading img'/>
        </div>
    )
}

export default Loading
