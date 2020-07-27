import React from 'react';
import Logo from '../../assets/img/logo.png';
import './menu.css';
import ButtonLink from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="FsFlix"/>
            </a>
            <ButtonLink className="ButtonLink" link="/">
                Novo Video
            </ButtonLink>
        </nav>
    );
}

export default Menu;