
import React, {  useState, useEffect } from 'react';
import classes from './FilterFor.module.css'




function FilterFor (props:any) {

    return (
        <div className={props.down? classes.wrapperdown : classes.wrapper}   onClick={props.selecttype} >
          <input className={props.down? classes.filteritemdown : classes.filteritem} type="checkbox" name={props.item}/>
          <label className={props.filterFor.includes(props.item) ? classes.labelactive : classes.label }>{props.item}</label>
        </div> 
    )
}

export default FilterFor

