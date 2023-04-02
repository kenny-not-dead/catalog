import React, { useEffect, useState } from 'react';
import classes from './../CatalogItem.module.css'
import classCart from './CartItem.module.css'
import global from './../css/global.module.css'
import ml from './../../icon/ml.svg'
import gr from './../../icon/gr.svg'
import del from './../../icon/delete.svg'


function Cartitem (props) {


    const [finalprice, setfinalprice] = useState(props.card.price)
    const [oldprice] = useState(props.card.price)
    const [count, setCount] = useState(1)


    const changePrice = () => {
        setfinalprice(props.card.price * count)
    }

    const instcount = (el) => {
        if(count < 0) {
            setCount(1)
        } else {
            setCount(el.target.value)
            changePrice()
          
        } 
    }

    const minus = () => {
        if(count > 1) {
            setCount(count-1)
            changePrice()
            props.getFinalPrice('minus', oldprice )
           
        } 
    }

    const plus = () => {
       setCount(count+1)
       changePrice()
       props.getFinalPrice('plus', oldprice )
    }

    useEffect( () => {
        changePrice()
    }, [count])



    return (
        <div className={classCart.wrapper}>
            <img class={classCart.img} src={require("./../catalogImg/2.svg").default} alt="Pict" />
            <div className={classCart.infowrapper}>
                <p className={classes.size}> {props.card.type === 'Вес' ? <img className={global.icontype} src={gr}/> : <img className={global.icontypeml} src={ml}/>} {props.card.size} {props.card.type === 'Вес' ? 'гр' : 'мл'}</p>
                <p className={classCart.name}> <strong>{props.card.brand} {props.card.name} </strong></p>
                <p className={classCart.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. </p>
            </div>
            <div className={classCart.countwrapper}>
                <button name='minus' className={classCart.btnplusminus} onClick={minus}> - </button>
                <input type="number" name='counts' className={classCart.count} value={count} onChange={instcount}/>
                <button name='minus' className={classCart.btnplusminus} onClick={plus}> + </button>
            </div>
            <p className={classCart.price}>{finalprice}₽</p>
            <button className={classCart.cartbtn} onClick={() => props.deleteItem(props.card.code)}>
                <img src={del} alt="X" />
            </button>
        </div>
    )
}

export default Cartitem