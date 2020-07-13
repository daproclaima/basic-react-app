import React from 'react'
import './Button.css'
// rsc

const Button = ({getOlder}) => {
    return (
        <button onClick={getOlder}>
            Getting older
        </button>
    )
}

export default Button
