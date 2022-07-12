import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'


const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <div><CrwnLogo className="logo" /></div>
        </Link>
        <nav className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </nav>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation