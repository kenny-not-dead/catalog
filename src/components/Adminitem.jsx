import React from 'react'
import classes from './Adminitem.module.css'

 function Adminitem(props) {


  const producer = ['Grifon', 'Boyscout', 'Paclan', 'Нэфис', 'Булгари Грин']
  const brand = ['AOS', 'Ariel', 'BiMAX']
  return (
   
    <div className={classes.wrapper}>       

                <input type="text" value={props.item.name} className={classes.textbig}/>
                <input type="number" value={props.item.size} className={classes.number}/>
                <select  defaultValue={props.item.type}>
                    <option value="Объем">Объем</option>
                    <option value="Вес">Вес</option>
                </select>
                <input type="number" name='code' value={props.item.code} className={classes.code}/>
                <select  defaultValue={props.item.producer}>
                    {producer.map( items => <option value={items}>{items}</option>)}
                </select>
                <select  defaultValue={props.item.brand}>
                    {brand.map( items => <option value={items}>{items}</option>)}
                </select>
                <input type="text" value={props.item.comment} className={classes.textbig}/>
                <input type="number" value={props.item.price} className={classes.number}/>
                <input type="text" value={props.item.for}/>
                <button onClick={()  => props.deleteItem(props.item.code)}>
                    Х
                </button>

    </div>
  )
}




export default Adminitem

