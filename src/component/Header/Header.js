import { useState, } from 'react'
import './Header.css'
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'

function Header({ location, loggedIn }) {
    const [clickMenu, setClickMenu] = useState(false);
    function handleClickMenu() {
        setClickMenu(!clickMenu)
    }

    const handleCloseClickMenu = () => {
        setClickMenu(false);
    };

    if (location === '/error404') {
        return ('')
    }

    return (
        <header className={`header  ${location === '/' ? 'header_background_theme_wight' :
            location === '/signin' ? 'header__register' :
                location === '/signup' ? 'header__register' : ''}`}>
            <Link to="/" className='header__link-go-to-main'>
                <img className="header__logo" src={logo} alt="Логотип дипломнйо работы" />
            </Link>
            <div className={`header__hover ${clickMenu ? 'header__hover_active' : ''}`}></div>
            <Navigation loggedIn={loggedIn} location={location} clickMenu={clickMenu} handleCloseClickMenu={handleCloseClickMenu} handleClickMenu={handleClickMenu} />
        </header>
    )
}

export default Header