import { Link, useLocation } from "react-router-dom"
import classes from './Breadcrambs.module.css'
import global from './css/global.module.css'

export default function Breadcrambs() {
    const location = useLocation()
    
    let currentLink = ''
    
    const crumbs = location.pathname.split('/').filter(crumb => crumb !== '').map(crumb => `${crumb}`).join(' ')

    return (
      <div className={global.container}>
        <div className={classes.breadcrambs}>
        <Link to='*'>Главная</Link>
          
          <div className={classes.item} key={crumbs}>
              <Link to={currentLink}>{crumbs}</Link>
          </div>
        </div>
      </div>
    )
}

