import React from 'react';
//import "bootstrap/dist/css/bootstrap.min.css"
import "./header.css"
import { Link, Outlet } from 'react-router-dom';

function Header() {
    return (
        <nav>
            <div className='logo'>
                <Link to='/App'>
                    <img src="https://res.cloudinary.com/dwjwb4mza/image/upload/v1694028701/WhatsApp_Image_2023-08-10_at_7.42.17_PM-removebg-preview_hkf4p6.png"/>
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
