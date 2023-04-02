import React from 'react'
import classes from './Contact.module.css'

function Contact (props) {

    return(
        <div className={props.position == 'footer' ? classes.footer :  classes.head  }>
             <a href="tel:+77774900091" className={classes.tel}> +7 (777) 490-00-91</a>
             <p className={classes.time}>время работы: 9:00-20:00</p>
             <button className={classes.contactbtn}>Заказать звонок</button>
        </div>
    )
}

export default Contact

