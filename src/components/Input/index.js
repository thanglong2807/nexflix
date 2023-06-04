import React from 'react'
import "./style.css"
function Input(props) {
    // onClick={props.onClick}
    return (
        <div className='input_container' >

            <input
                className={`input`}
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                required
            />
            <label className={`label ${props.styleLabel}`}>{props.label}</label>
        </div>
    )
}

export default Input