import React from 'react'
import classes from './Mail.module.css'

export default function Mail(props) {
  return (
    <div>
         <p className={props.position == 'footer' ? classes.adresInfofooter : classes.adresInfo}>{props.info1}<br/> <span className={props.position == 'footer'? classes.spanfooter : classes.span}>{props.info2}</span></p>
    </div>
  )
}
