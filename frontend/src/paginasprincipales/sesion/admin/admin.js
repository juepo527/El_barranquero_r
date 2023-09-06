import React from 'react'
import './admin.css'
import { Link, Outlet } from 'react-router-dom';

function Admin() {
  return (
    <div>
      <div className='general_admin'>
        <div className='izquierda'>
          <div className='pedido'></div>
          <div className='reserva'></div>
        </div>
        <div className='derecha'>
          <div className='derecha_arriba'>
            <div className='ingresos'></div>
            <div className='egresos'></div>
            <div className='ganancias'></div>
          </div>
          <div className='derecha_abajo'>
            <div className='mesas'></div>
            <div className='domicilios'></div>
          </div>
        </div>
      </div>
      <Link to='/editarMenu'><button>Editar Menu</button></Link>
      <Outlet/>
    </div>
  )
}

export default Admin