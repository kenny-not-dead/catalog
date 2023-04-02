import React, {useEffect, useState} from 'react'
import classes from './Cut.module.css'
import cut from './../headerImg/cut.svg'


function Cut (props) {

    /*
    const buy = JSON.parse(localStorage.getItem('id'))
    const total = JSON.parse(localStorage.getItem('total'))

    <p className={classes.totalprice}>{total}</p>
    */


    return( 
        <div className={classes.wrapper}>
            <img src={cut} alt="cut" className={classes.cuticon}/>
            {props.count? <div className={classes.count}>
                        <p className={classes.p} >{props.count}</p>       
                    </div> : null}
            <div className={classes.totalpricewrapper}>
                <p className={classes.pcut}>Корзина</p>
                
            </div> 
        </div>
    )
}

export default Cut