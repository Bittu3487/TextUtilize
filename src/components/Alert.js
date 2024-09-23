import React from 'react'

const Alert = (props) => {
    const Capitalize = (word) => {
        const new_txt = word.toLowerCase()
        return new_txt.charAt(0).toUpperCase() + new_txt.slice(1)
    }
    return (
        <div style={{height:'50px'}}>
        {props.alert && <div className="my-2">
            <div class={`alert alert-${props.alert.type}`} role="alert">
                <strong>{Capitalize(props.alert.type)}:</strong>{props.alert.message}
            </div>
        </div>}
        </div>

    )
}

export default Alert