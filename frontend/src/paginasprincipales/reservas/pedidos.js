import React from 'react'
import './pedidos.css'
import { Link, Outlet } from 'react-router-dom';

function Pedidos() {
  return (
    <div>
      <Link to={'/comprarecoge'}>Compre y recoje</Link>
      <Link to={'/domicilio'}>Domicilio</Link>
      <Link to={'/reserva'}>Reserva</Link>
      <Outlet/>
    </div>
  )
}

export default Pedidos