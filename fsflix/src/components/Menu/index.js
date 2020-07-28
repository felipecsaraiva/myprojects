import React from 'react';
import Logo from '../../assets/img/logo.png';
import './menu.css';
import ButtonLink from '../Button';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="FsFlix"/>
            </Link>
            <ButtonLink className="ButtonLink" link="/cadastro/video">
                Novo Video
            </ButtonLink>
        </nav>
    );
}

export default Menu;