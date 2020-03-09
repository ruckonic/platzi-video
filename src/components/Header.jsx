import React from 'react';

import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video.png';
import userIcon from '../assets/static/icons-user.png'

const Header = () => {
    return(
        <header className="header">
            <img className="header__img" src={logo} alt="Platzi Videos" />
            <div className="header__menu">
                <div className="header__menu--profile">
                    <img src={userIcon} alt="User" />
                    <p>Perfil</p>
                </div>
                <ul>
                    <li><a href="/">Cuenta</a></li>
                    <li><a href="/">Cerrar Sesión</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;