import React from 'react';
//import "bootstrap/dist/css/bootstrap.min.css"
import "./header.css"

function Header() {
    return (
        <nav>
            <div className='logo'>
                <a href='#'>
                    <img src="assets/logo.jpeg"/>
                </a>
            </div>
            <ul className='items'>
                <li className='activo'><a href='#'>Inicio</a></li>
                <li><a href='#'>Menú</a></li>
                <li><a href='#'>Reserva</a></li>
                <li><a href='#'>Inicio sesión</a></li>
            </ul>
        </nav>
    );
}

export default Header;
