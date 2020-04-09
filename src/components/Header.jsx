import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video.png';
import userIcon from '../assets/static/icons-user.png'

const Header = () => {
    return(
        <header className="header">
            <Link to="/">
                <img className="header__img" src={logo} alt="Platzi Videos" />
            </Link>

            <div className="header__menu">
                <div className="header__menu--profile">
                    <img src={userIcon} alt="User" />
                    <p>Perfil</p>
                </div>
                <ul>
                    <li><Link to="/login">Cuenta</Link></li>
                    <li><Link to="/">Cerrar Sesión</Link></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;