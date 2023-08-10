import React from 'react'
import './pedidos.css'
import { Link, Outlet } from 'react-router-dom';

function Pedidos() {
  return (
    <div class='cuerpo'>
      <button type="button" class="btn btn-success"><Link to={'/comprarecoge'}>Compre y recoje</Link></button>
      <button type="button" class="btn btn-success"><Link to={'/domicilio'}>Domicilio</Link></button>
      <button type="button" class="btn btn-success"><Link to={'/reserva'}>Reserva</Link></button>
      <Outlet/>
    </div>
  )
}

export default Pedidos