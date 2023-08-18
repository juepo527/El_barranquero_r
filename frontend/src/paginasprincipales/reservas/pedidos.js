import React from 'react'
import './pedidos.css'
import { Link, Outlet } from 'react-router-dom';

function Pedidos() {
  return (
    <div class='cuerpo_pedidos'>
      <Link to={'/comprarecoge'}><button type="button" class="btn btn-success">Compre y recoje</button></Link>
      <Link to={'/domicilio'}><button type="button" class="btn btn-success">Domicilio</button></Link>
      <Link to={'/reserva'}><button type="button" class="btn btn-success">Reserva</button></Link>
      <Outlet/>
    </div>
  )
}

export default Pedidos