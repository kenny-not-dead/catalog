import React from 'react';
import classes from './Footer.module.css'
import logo from './footerimg/logo.svg'
import Emailinput from './UI/Emailinput';
import whatsapp from './../icon/whatsapp.svg'
import telegram from './../icon/telegram.svg'
import iconPrice from './headerImg/icon2.svg'
import visa from './../icon/visa.svg'
import mastercard from './../icon/mastercard.svg'
import Button from './UI/Button';
import Contact from './UI/Contact';
import Mail from './UI/Mail';
import { NavLink } from 'react-router-dom';



function Footer () {

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div>
                    <img src={logo} alt="logo" />
                    <p className={classes.about}>
                        Компания «Султан» — снабжаем розничные магазины товарами <br/> "под ключ" в Кокчетаве и Акмолинской области
                    </p>
                    <p className={classes.subscribep}>
                        Подпишись на скидки и акции
                    </p>
                    <Emailinput/>
                </div>

                <div className={classes.footermenu}>
                    <h3>Меню сайта:</h3>
                    <a href="#">О компании</a>
                    <a href="#">Доставка и оплата</a>
                    <a href="#">Возврат</a>
                    <a href="#">Контакты</a>
                </div>
                <div className={classes.footermenu}>
                    <h3>Категории:</h3>
                    <a href="#">Бытовая химия</a>
                    <a href="#">Косметика и гигиена</a>
                    <a href="#">Товары для дома</a>
                    <a href="#">Товары для детей и мам</a>
                    <a href="#">Посуда</a>
                </div>
                <div className={classes.footermenu}>
                    <h3>Скачать прайс-лист:</h3>
                    <Button name='Прайс-лист' icon = {iconPrice} position ='footer'/>
                    <a href="#">Связь в мессенджерах:</a>
                    <img src={whatsapp} alt="Whatsapp" />
                    <img className={classes.footerimgmargin} src={telegram} alt="Telegram" />
                </div>
                <div className={classes.footermenu}>
                    <h3>Контакты:</h3>
                    <Contact position='footer'/>
                    <Mail  position='footer' info1='opt.sultan@mail.ru' info2='На связи в любое время'/>
                    <img src={visa} alt="Visa" />
                    <img className={classes.footerimgmargin} src={mastercard} alt="Mastercard" />
                </div>
            </div>
            <NavLink to="/admin">
                  <h2 className={classes.admin}>Админка</h2>
            </NavLink>
        </div>
    )
}



export default Footer