import React from 'react'
import AddProduct from './AddProduct'
import Adminitem from './Adminitem'
import global from './css/global.module.css'

 function Admin(props) {

  return (
    <div className={global.container}>
        {props.newData.map( item => <Adminitem item = {item} deleteItem={props.deleteItem} save ={props.save}/>)}
        <h4>Добавить новый</h4>
        <AddProduct newData={props.newData} addnew={props.addnew} />
    </div>
  )
}

export default Admin

