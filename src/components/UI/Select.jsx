import React from 'react';
import classes from './Select.module.css'

function Select (props) {

    return(
    <div className={classes.wrapper}>
        <p className={classes.label}>Сортировка</p>
        <select className={classes.select}
            value = {props.value}
            onChange = {event => props.onChange(event.target.value)}
        >
          {props.option.map( option => 
            <option key={option.value} value={option.value}>
                {option.name}
            </option>
          )}
        </select>
        <span  className={classes.span} onClick={props.reverseCatalog}>
            {props.rotate?  
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg> :
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
          </svg>
            }
        </span>
        </div>
    )
}

export default Select