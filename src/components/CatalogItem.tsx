import React, {useState} from 'react';
import classes from './CatalogItem.module.css'
import cut from '../icon/cut.svg'
import global from './css/global.module.css'
import ml from './../icon/ml.svg'
import gr from './../icon/gr.svg'
import { Link } from 'react-router-dom';



function CatalogItem (props: any) {

    return (
        <div className={classes.card}> 
            <img src={require("./catalogImg/2.svg").default} className={classes.cardimg} alt="Pict" />
            <p className={classes.size}> {props.card.type === 'Вес' ? <img className={global.icontype} src={gr}/> : <img className={global.icontypeml} src={ml}/>} {props.card.size} {props.card.type === 'Вес' ? 'гр' : 'мл'}</p>
            
            <Link to={props.card.code.toString()}>
                <p className={classes.name}> <strong>{props.card.brand}</strong> {props.card.name}</p>
            </Link>
            <div className={classes.desc}>
                <p><span>Штрихкод: </span>{props.card.code}</p>
                <p><span>Производитель: </span>{props.card.producer}</p>
                <p><span>Бренд: </span>{props.card.brand}</p>
                <p><span>Тип ухода: </span>{props.card.for.join(', ')}</p>
            </div>

            <div className={classes.priceWrapper}>
                <p className={classes.price}>{props.card.price} ₽</p>
                <button className={classes.button} onClick={() => props.addcart(props.card.code, props.card.price)}>В КОРЗИНУ <img src={cut} alt="Icon" /></button>
            </div>
            
    
        </div>
    )
}



export default CatalogItem

export {}