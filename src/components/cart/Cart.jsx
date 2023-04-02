import React, {  useEffect, useState } from 'react';
import Cartitem from './CartItem';
import global from './../css/global.module.css'
import classes from './Cart.module.css'
import Button from '../UI/Button';
import Modal from '../UI/Modal';


function Cart (props) {



    const buy = JSON.parse(localStorage.getItem('id'))
    
   
    let [price, setPrice] = useState(0)

    const getFinalPrice = (action, step) => {
        if (action === 'plus') {
            setPrice(price + step)
            props.setCount(props.count + 1)
        } else if (action === 'minus') {
            setPrice(price - step)
            props.setCount(props.count - 1)
        } 
    }

    const [modal, setModal] = useState(false)

    const pay = () => {
        setItem([])
        setPrice(0)
        setModal(true)
        setTimeout(() => {
            setModal(false);
          }, 3000);
    }

    const [item, setItem] = useState([])

    useEffect (() => {
        if(buy) {for(let x=0; x<buy.length; x++ ) {
            let find = props.newData.find( i => i.code == buy[x])
            if (!item.includes(find)) {
                item.push(find)
                price = price + find.price
                setPrice(price)
            }   
        }
    }   
    },[])
           


    
    const deleteItem = (el) => {
        let newArr = item.filter(i => i.code !== el)
        setItem(newArr)
    }
    

    useEffect( () => {
        deleteItem()
    }, [item])

    const countcut = props.count
    const setCountcut = props.setCount

    return(
        <div className={global.container}>
            {modal ? <Modal/> : '' }
            <h2>Корзина</h2>
            <ul>
                {item.map(card => <Cartitem card = {card} key = {card.code} item = {item} setItem={setItem} getFinalPrice={getFinalPrice} deleteItem={deleteItem} countcut={countcut} setCountcut = {setCountcut}/>)}
            </ul>
            <div className={classes.wrapper}>
                <Button position='footer' name='Оформить заказ' action={pay}/> 
                <p>{price}₽</p>
            </div>
        </div>
    )
}

export default Cart