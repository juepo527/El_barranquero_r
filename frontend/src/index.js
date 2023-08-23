import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './paginasprincipales/inicio/App';
import { BrowserRouter } from 'react-router-dom';
import './paginasprincipales/inicio/App.css';
import Header from './paginasprincipales/inicio/componentes/header';
import { Routes, Route } from 'react-router-dom';
import Menu from './paginasprincipales/menu/menu';
import Pedidos from './paginasprincipales/reservas/pedidos';
import Iniciosesion from './paginasprincipales/sesion/iniciosesion';
import Compra_recoge from './paginasprincipales/reservas/comprarecoge/comprarecoge';
import Domicilio from './paginasprincipales/reservas/domicilio/domicilio';
import Admin from './paginasprincipales/sesion/admin/admin';
import Reserva from './paginasprincipales/reservas/reserva/reserva';
import Edit_menu from './paginasprincipales/sesion/edit_menu/edit_menu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Header></Header>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='App' element={<App/>}/>
            <Route path='menu' element={<Menu/>}/>
            <Route path='pedidos' element={<Pedidos/>}/>
            <Route path='comprarecoge' element={<Compra_recoge/>}/>
            <Route path='domicilio' element={<Domicilio/>}/>
            <Route path='reserva' element={<Reserva/>}/>
            <Route path='iniciosesion' element={<Iniciosesion/>}/>
            <Route path='admin' element={<Admin/>}/>
            <Route path='editarMenu' element={<Edit_menu/>}/>
        </Routes>
    </BrowserRouter>
);
