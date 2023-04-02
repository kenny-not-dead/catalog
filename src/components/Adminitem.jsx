import React, {useState} from 'react'
import classes from './Adminitem.module.css'

 function Adminitem(props) {


  const producer = ['Grifon', 'Boyscout', 'Paclan', 'Нэфис', 'Булгари Грин']
  const brand = ['AOS', 'Ariel', 'BiMAX']

  const [formData, setFormData] = useState({
    url: "./catalogImg/1.svg",
    name: props.item.name,
    size: props.item.size,
    type: props.item.type,
    code: props.item.code,
    producer: props.item.producer,
    brand: props.item.brand,
    comment: props.item.comment,
    price: props.item.price,
    for: props.item.for,
  });
  

const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  



  return (
   
    <div className={classes.wrapper}>       
            <form name='products'>
                <input type="text"  name="name" value={formData.name}  onChange={handleInputChange} className={classes.textbig}/>
                <input type="number" name="size" onChange={handleInputChange} value={formData.size} className={classes.number}/>
                <select  name="type" onChange={handleInputChange} defaultValue={formData.type}>
                    <option value="Объем">Объем</option>
                    <option value="Вес">Вес</option>
                </select>
                <input type="number" name='code' value={formData.code}  onChange={handleInputChange} className={classes.code}/>
                <select  name="producer" onChange={handleInputChange}  defaultValue={formData.producer}>
                    {producer.map( items => <option value={items}>{items}</option>)}
                </select>
                <select  name="brand" onChange={handleInputChange} defaultValue={formData.brand}>
                    {brand.map( items => <option value={items}>{items}</option>)}
                </select>
                <input type="text" name="comment" value={formData.comment} onChange={handleInputChange} className={classes.textbig}/>
                <input type="number"  name="price" value={formData.price} onChange={handleInputChange} className={classes.number}/>
                <input type="text"  name="for" value={formData.for} onChange={handleInputChange} />
                <button type="submit" onClick={(e) => props.save(e, formData)}>
                   Save
                </button>
                <button onClick={(e)  => props.deleteItem(e, props.item.code)}>
                    Х
                </button>
            </form>
                

    </div>
  )
}




export default Adminitem

