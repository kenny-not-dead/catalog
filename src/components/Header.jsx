import React from 'react';
import classes from './Header.module.css'
import global from './../components/css/global.module.css'
import logo from './headerImg/logo.svg'
import Button from './UI/Button';
import iconfour from './headerImg/icon1.svg'
import iconPrice from './headerImg/icon2.svg'
import Search from './UI/Search';
import Contact from './UI/Contact';
import women from './headerImg/women.svg'
import Cut from './UI/Cut';
import { NavLink } from 'react-router-dom';
import Breadcrambs from './Breadcrambs';
import Mail from './UI/Mail';
import humburger from './../icon/humburger.svg'


function Header (props) {

    const count = props.count 

    return (
        <div>
            <div className={global.container}>
                <div className={classes.headerwrapper}>
                        <div className={classes.adresWrapper}>
                                <div className={classes.icon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  class="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    </svg>
                                </div>            
                                <Mail info1='г. Кокчетав, ул. Ж. Ташенова 129Б' info2='(Рынок Восточный)'/>
                        </div>
                        <div className={classes.adresWrapper}>  
                                <div className={classes.icon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={classes.icon} class="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                    </svg>
                                </div>           
                               <Mail info1='opt.sultan@mail.ru' info2='На связи в любое время'/>
                              
                        </div>
                        <nav className={classes.nav}>
                            <a href="#">О компании</a>
                            <a href="#">Доставка и оплата</a>
                            <a href="#">Возврат</a>
                            <a href="#">Контакты</a>
                        </nav>
                </div>
            </div>

            <div className={classes.headerWrapperSecond}>
                <div className={global.container}>
                    <div className={classes.headerContentWrapper}>
                        <img src={humburger} className={classes.humburger} alt="Humburger" />
                        <img src={logo} alt="logo" className={classes.logo}/>
                        <Button name='Каталог' icon = {iconfour}/>
                        <Search none='none'/>
                        <Contact/>
                        <img src={women} className={classes.women}/>
                        <Button name='Прайс-лист' icon = {iconPrice}/>
                        <NavLink to="/cart">
                            <Cut count = {count} />
                        </NavLink>
                    </div>
                </div>
            </div>
            <Breadcrambs/>
        </div>
    )
}

export default Header