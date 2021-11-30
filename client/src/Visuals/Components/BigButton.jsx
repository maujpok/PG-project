import React from 'react'

function BigButton({onClickFunction, text, cssActive, disactive, cssDisactive, textActive, textDisactive, type}) {
    return (
        <div>
            <button disabled={disactive}
                    type={type}
                    className={disactive?cssDisactive:cssActive}
                    onClick={onClickFunction}
            ><span className={disactive?textDisactive:textActive}>{text}</span></button>
        </div>
    )
}

export default BigButton
