import React, {useEffect, useState}  from 'react';
import './App.css';
import Catalog from './components/Catalog';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Cart from './components/cart/Cart';
import data from './data.json'
import Product from './components/Product';
import Admin from './components/Admin';




function App() {

  let datas = data.data

  const [newData, setNewData] = useState(datas)

  const deleteItem = (el: any) => {
    let newArr = newData.filter(i => i.code !== el)
    setNewData(newArr)
}

const addnew = (e:any, formdata:any) => {
  e.preventDefault()
  formdata.for = formdata.for.split(',')
  setNewData((prevData) => [...prevData, formdata]);
}




  const [count, setCount] = useState (0)


  return (
      <BrowserRouter>
        <div className="App">
            <Header count={count} />
            <Routes>
                <Route path='catalog/:id' element={<Product count={count} setCount = {setCount}/>}/>
                <Route path='catalog' element={<Catalog newData={newData}  count={count} setCount = {setCount}/>}/>
                <Route path='cart' element={<Cart newData={newData} count={count} setCount = {setCount}/>}/>
                <Route path='admin' element={<Admin newData={newData} addnew={addnew} deleteItem={deleteItem}/>}/>
                <Route path="*" element={<Navigate to="catalog" replace />} />
            </Routes>      
            <Footer/>
        </div>
      </BrowserRouter>

  );
}

export default App;

