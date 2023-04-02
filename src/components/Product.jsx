import { useParams } from "react-router-dom"
import data from './../data.json'
import global from './css/global.module.css'
import ml from './../icon/ml.svg'
import gr from './../icon/gr.svg'
import classes from './Product.module.css'
import classCart from './cart/CartItem.module.css'
import { useState } from "react"
import Button from "./UI/Button"
import cut from "./../icon/cut.svg"
import download from './../icon/downl.svg'
import share from './../icon/share.svg'
import classescatalog from './CatalogItem.module.css'


export default function Product(props) {

    const {id} = useParams()
    
    let newData = data.data
    let newDatas = newData.find(x => x.code == id)


    const [count, setCount] = useState(1)

    
    const instcount = (el) => {
        if(count < 0) {
            setCount(1)
        } else {
            setCount(el.target.value)

        }
    }
    const minus = () => {
        if(count > 1) {
            setCount(count-1)      
        } 
    }

    const plus = () => {
       setCount(count+1)
    }
  
    const [rotate, setRotate] = useState(true);
    const [rotate2, setRotate2] = useState(true);
    
    let reverseCatalog = () =>{
        setRotate(prevRotate => ! prevRotate)
    }

    let reverseCatalog2 = () =>{
        setRotate2(prevRotate => ! prevRotate)
    }

  return (
    <div className={global.container}>
            <div className={classes.productwrapper}>
                <img className={classes.productimg} src={require("./catalogImg/2.svg").default} alt="Pict" />
                <div className={classes.infowrapper}>
                    <p className={classes.available}>В наличии</p>
                    <p className={classes.name}> <strong>{newDatas.brand}</strong> {newDatas.name}</p>
                    <p className={classes.size}> {newDatas.type === 'Вес' ? <img className={global.icontype} src={gr}/> : <img className={global.icontypeml} src={ml}/>} {newDatas.size} {newDatas.type === 'Вес' ? 'гр' : 'мл'}</p>
                    <div className={classes.actionwrapper}>
                        <p className={classes.price}>{newDatas.price}₽</p>
                        <div className={classes.countposition}>
                            <button name='minus' className={classCart.btnplusminus} onClick={minus}> - </button>
                            <input type="number" name='counts' className={classCart.count} value={count} onChange={instcount}/>
                            <button name='minus' className={classCart.btnplusminus} onClick={plus}> + </button>
                        </div>
                        <div className={classes.btnwrapper}>
                             <Button position='footer' className={classes.btn} name='В корзину' icon = {cut} />
                        </div>
                    </div>
                    <div className= {classes.sharewrapper}>
                        <div className={classes.rectangle}>
                            <img src={share} className={classes.img}/>
                        </div>
                        <div className={classes.rectangle}>
                            <p className={classes.offer}>При покупке от <strong>10 000 ₸</strong> бесплатная доставка по Кокчетаву и области</p>
                        </div>
                        <div className={classes.rectangle}>
                            <div className={classes.rectanglewrapper}>
                                <p className={classes.pricelist}>Прайс-лист</p>
                                <img src={download}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={classescatalog.desc}>
                            <p><span>Производитель: </span>{newDatas.producer}</p>
                            <p><span>Бренд: </span>{newDatas.brand}</p>
                            <p><span>Артикул: </span>460404</p>
                            <p><span>Кол-во в коробке: </span>2</p>
                            <p><span>Штрихкод: </span>{newDatas.code}</p>
                            <p><span>Размеры коробки(Д*Ш*В): </span>10х10х10</p>
                            <p><span>Вес коробки: </span>1020 г</p>
                        </div>
                    </div>
                    <div>
                        <div className={classes.textwrapper}>
                                <div></div>
                                <h4>Описание</h4>
                                <span  className={classes.span} onClick={reverseCatalog}>
                                    {rotate?  
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                    </svg> :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                </svg>
                                    }
                                </span>
                                
                        </div>
                        {!rotate ? <p className={classes.text1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.</p> : ''}
                        <div className={classes.textwrapper}>
                                <div></div>
                                <h4>Характерисики</h4>
                                <span  className={classes.span} onClick={reverseCatalog2}>
                                    {rotate2?  
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                    </svg> :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                                    <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
                                </svg>
                                    }
                                </span>
                        </div>
                        {!rotate2 ? <p className={classes.text2}>
                        <div className={classescatalog.desc}>
                            <p><span>Назначение: </span>BioMio</p>
                            <p><span>Тип: </span>{newDatas.brand}</p>
                            <p><span>Производитель: </span>{newDatas.producer}</p>
                            <p><span>Бренд: </span>{newDatas.brand}</p>
                            <p><span>Артикул: </span>{newDatas.code}</p>
                            <p><span>Штрихкод: </span>{newDatas.code}</p>
                            <p><span>Вес коробки: </span>1020 г</p>
                        </div>
                        </p>
                        : ''}
                       
                    </div>
                </div>
            </div>
    </div>
  )
}

