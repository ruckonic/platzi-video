import React, { Fragment } from  'react';
import {Link} from 'react-router-dom';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../assets/styles/components/Login.scss';


const Login = () => (
    <Fragment>
        <section className="login">
            <div className="login__container">
                <h2>Inicia sesión</h2>
                <form action="" className="login__container--form">
                    <input className="input" type="text" name="" id="" placeholder="Correo" />
                    <input className="input" type="password" name="" id="" placeholder="Contraseña" />
                    <button className="button">Iniciar sesión</button>
                    <div className="login__container--remember-me">
                        <label>
                            <input type="checkbox" name="" id="cbox1" value="checkbox" />Recuérdame
                        </label>
                        <a href="/">Olvidé mi contraseña</a>
                    </div>
                </form>
                <section className="login__container--social-media ">
                    <div><img src={googleIcon} alt="Google" />Inicia sesión con Google</div>
                    <div><img src={twitterIcon} alt="Twitter" />Inicia sesión con Twitter</div>
                </section>
                <p className="login__container--register">
                    No tienes ninguna cuenta 
                    <Link to="/register">
                        Registrate
                    </Link>
                </p>
            </div>
        </section>
    </Fragment>
);

export default Login;