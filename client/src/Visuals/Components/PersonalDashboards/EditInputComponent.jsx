import React from 'react'

function EditInputComponent(props) {
    return (
        <div className={props.divClass}>
            <label  htmlFor="name"
                    className={props.labelClass}
                >{props.label}</label>
            <input  id='name'
                    type={props.type?props.type:"text"}
                    name={props.inputName}
                    value={props.value}
                    className={props.inputClass}
                    autoComplete='off'
                    onChange={props.onChange}
                />
        </div>
    )
}

export default EditInputComponent
