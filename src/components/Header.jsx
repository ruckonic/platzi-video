import React from 'react';

import '../assets/styles/components/Header.scss';

const Header = () => {
    return(
        <header className="header">
            <img className="header__img" src="./assets/img/logo-platzi-video.png" alt="Platzi Videos" />
            <div className="header__menu">
                <div className="header__menu--profile">
                    <img src="./assets/img/icons-user.png" alt="User" />
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