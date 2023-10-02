import React from 'react'
import './pedidos.css'
import { Link, Outlet } from 'react-router-dom';

function Pedidos() {
  return (
    <div class='cuerpo_pedidos'>
      <h1 className="titulo">Reserva</h1>
      <br/>
      <form className='reserva'>
        <div className='personal'>
          <h3>Información personal</h3>
          <label for="nombre">Nombre del cliente: </label><input type="text" name="nombre" placeholder='Juanito Perez' />
          <br />
          <label for="dirección">Dirección</label><input type='text' name='direccion' placeholder='El Rosario' />
          <br />
          <label for="telefono">Telefono:</label><input type='number' name='telefono' placeholder='111-333-555' />
          <br />
          <label for="correo">Correo:</label><input type='email' name='correo' placeholder='ejemplo@gmail.com' />
          <br />
        </div>
        <div className='info-reserva'>
          <h3>Información de la reserva</h3>
          <label for="fecha">Fecha de la reserva (De Viernes a Lunea):</label><input type='date' name='fecha' />
          <label for="Hora">Hora de la reserva</label><input type='time' name='Hora'/>
          <label for="persona">Personas Invitadas</label><input type='number' name='persona'/>
        </div>
      </form>
      <button type='submit'>Enviar</button>
    </div>
  )
}

export default Pedidos