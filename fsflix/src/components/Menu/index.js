import React from 'react';
import Logo from '../../assets/img/logo.png';
import './menu.css';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <>
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="FsFlix"/>
            </Link>
            
        </nav>
        
        </>
    );
}

export default Menu;