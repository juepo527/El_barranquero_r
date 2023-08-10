import React from 'react'
import './admin.css'

function Admin() {
  return (
  <div className='general'>
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
  )
}

export default Admin