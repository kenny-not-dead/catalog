import React,  {  useState, useEffect } from 'react';
import Search from './Search';
import classes from './SelectFilter.module.css'

function SelectFilter (props) {

    const producer = ['Grifon', 'Boyscout', 'Paclan', 'Нэфис', 'Булгари Грин']
    
    const [label, setLabel] = useState(producer)

    const search = (el) => {
        let newData = producer.filter( item => {
            if( item.includes(el.target.value)) {
                return true
            }   
        })
        setLabel(newData)
    }

    const [number, setNumber] = useState(3)


    const setAll = () => {
        if(number != 10) {
        setNumber(10)
        } else {
            setNumber(3)
        }
    } 

    return(
    <div>
        <p className={classes.p}>{props.name}</p>
        <Search search={search}/>
        <ul>
            {label.slice(0, number).map(i => 
              <li className={classes.lifilter}>
                 <input class={classes.inputcatalog} type="checkbox" name={i} onChange={props.changecheckbox}/>
                 <label for={i}>{i}</label> 
             </li>
            )}
        </ul>
        
        <p className={classes.all} onClick={setAll}>{number == 10 ? 'Скрыть' : 'Показать всё'}</p>

    </div>
    )
}

export default SelectFilter

