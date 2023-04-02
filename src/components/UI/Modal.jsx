import React from 'react'
import classes from './Modal.module.css'

export default function Modal() {
  return (
    <div className={classes.modal}>
        <div className={classes.modalwrapper}>
            <p className={classes.modalp}> Спасибо за заказ!</p>
        </div>
    </div>
  )
}
