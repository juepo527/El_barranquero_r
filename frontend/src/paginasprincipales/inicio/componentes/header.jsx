import React from 'react';
//import "bootstrap/dist/css/bootstrap.min.css"
import "./header.css"
import { Link, Outlet } from 'react-router-dom';

function Header() {
    return (
        <nav>
            <div className='logo'>
                <Link to='/App'>
                    <img src="https://res.cloudinary.com/drvg6pa3z/image/upload/v1694636356/baranca-removebg-preview_rnz0d1.png"/>
                </Link>
            </div>
            <ul className='items'>
                <li className='activo'><Link to='/App'>Inicio</Link></li>
                <li><Link to='/menu'>Menú</Link></li>
                <li><Link to='/pedidos'>Reserva</Link></li>
                <li><Link to='/iniciosesion'>Inicio sesión</Link></li>
            </ul>
        <Outlet/>
        </nav>
    );
}

export default Header;
