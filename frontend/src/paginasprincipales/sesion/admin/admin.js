import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import Axios from 'axios'
import './admin.css'
import { Link, Outlet } from 'react-router-dom';

function Admin() {

  const [pedidos, setPedidos] = useState([])

  const datosPedidos = () => {
    Axios.get('http://localhost:3001/admin',).then((response) => {
      setPedidos(response.data)
    })
  }

  datosPedidos()

  return (
    <div>
      <div className='general_admin'>
        <div className='izquierda'>
          <div className='pedido'>
            {pedidos.map((producto) => {
              return <div className='celdaPedido'>
                <h3>{producto.id_platos}</h3>
                <h3>Cédula cliente: {producto.cedula_cliente}</h3>
                <h2>{producto.total}</h2>
                <button className='btn'>Entregado</button>
              </div>
            })
            }
          </div>
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
      <Outlet />
    </div>
  )
}

export default Admin