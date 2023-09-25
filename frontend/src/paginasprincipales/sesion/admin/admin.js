import React from 'react'
import './admin.css'
import { Link, Outlet } from 'react-router-dom';

function Admin() {
  return (
    <div>
      <div className='general_admin'>
        <div className='izquierda'>
          <div className='pedido'>Pedidos</div>
          <div className='reserva_contenedor'>Reservas</div>
        </div>
        <div className='derecha'>
          <div className='derecha_arriba'>
            <div className='ingresos'>Ingresos</div>
            <div className='egresos'>Ganancias</div>
            <div className='ganancias'>Egresos</div>
          </div>
          <div className='derecha_abajo'>
            <div className='mesas'>Mesas</div>
            <div className='domicilios'>Domicilios</div>
          </div>
        </div>
      </div>
      <Link to='/editarMenu'><button>Editar Menu</button></Link>
      <Outlet/>
    </div>
  )
}

export default Admin