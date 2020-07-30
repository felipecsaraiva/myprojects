import React from 'react';
import Logo from '../../assets/img/logo.png';
import './menu.css';
import ButtonLink from '../Button';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <>
        <div className="Player">
            Aqui vai ter que aparecero player
        </div>
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="FsFlix"/>
            </Link>
            <ButtonLink className="ButtonLink" link="/cadastro/video">
                Novo Video
            </ButtonLink>
        </nav>
        
        </>
    );
}

export default Menu;