import React from 'react'
import classes from './Button.module.css'

function Button (props) {
    return( 
    <button className={props.position == 'footer' ?  classes.btnfooter : classes.btn } onClick={props.action}>
        {props.name}
        <img src={props.icon} />
    </button>
    )
}

export default Button