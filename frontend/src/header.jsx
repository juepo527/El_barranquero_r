import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "./header.css"

function Header() {
    return (
        <div class="bg-primary-subtle container">
            <nav class="navbar fixed-top bg-body-dark">
                <div class="logo">
                    <img src="/PIA/assets/logo.jpeg" alt="Logo" />
                </div>
                <ul class="lista">
                    <li><a href="index.html" class="actual">Inicio</a></li>
                    <li><a href="menu.html">Menú</a></li>
                    <li><a href="reservas.html">Reservas</a></li>
                    <li><a href="sesion.html">Admin</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
