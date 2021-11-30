import React from 'react'
import BigButton from '../BigButton'

function LoginInputComponent(props) {

    const handleInputChange=(e)=>{
        props.setInputField && props.setInputField(e.target.value)
        props.handleChange(e)
    }

    return (
        <div className={props.classDiv}>
            <div className={props.classPass}>
                <label className={props.classLabel}>{props.text}</label>
                <BigButton onClickFunction={props.handleShowPass} text={props.textPassBtn} cssClass={props.classBtnPass}/>
            </div>
            <input  type={props.type}
                    autoComplete="off" 
                    name={props.name}
                    placeholder={props.placeholder}
                    className={props.classInput} 
                    onChange={handleInputChange}
                    value={props.inputField}
                    onKeyDown={props.onkeypress}
                />
        </div>
    )
}

export default LoginInputComponent
