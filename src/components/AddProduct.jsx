import React, {useState} from 'react'
import classes from './Adminitem.module.css'

 function AddProduct(props) {

    const [formData, setFormData] = useState({
        url: "./catalogImg/1.svg",
        name: '',
        size: 0,
        type: 'Объем',
        code: 0,
        producer: '',
        brand: '',
        comment: '',
        price: 0,
        for: '',
      });
    

  const producer = ['Grifon', 'Boyscout', 'Paclan', 'Нэфис', 'Булгари Грин']
  const brand = ['AOS', 'Ariel', 'BiMAX']



  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return ( 
    <div className={classes.add}>    
        <form name='product'>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} className={classes.textbig}/>
                <input type="number" name="size" value={formData.size} onChange={handleInputChange} className={classes.number}/>
                <select name="type" value={formData.type} onChange={handleInputChange}>
                    <option value="Объем">Объем</option>
                    <option value="Вес">Вес</option>
                </select>
                <input type="number" name="code" value={formData.code} onChange={handleInputChange} className={classes.code}/>
                <select name="producer" value={formData.producer} onChange={handleInputChange}>
                    {producer.map( items => <option key={items} value={items}>{items}</option>)}
                </select>
                <select name="brand" value={formData.brand} onChange={handleInputChange}>
                    {brand.map( items => <option key={items} value={items}>{items}</option>)}
                </select>
                <input type="text" name="comment" value={formData.comment} onChange={handleInputChange} className={classes.textbig}/>
                <input type="number" name="price" value={formData.price} onChange={handleInputChange} className={classes.number}/>
                <input type="text" name="for" value={formData.for} onChange={handleInputChange}/>
                <button type="submit" onClick={(e) => props.addnew(e, formData)} >
                    +
                </button>
        </form>   
    </div>
  )
}


export default AddProduct

