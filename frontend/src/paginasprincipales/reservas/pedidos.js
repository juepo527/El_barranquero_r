import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './pedidos.css'
import Swal from 'sweetalert2';
import Axios from 'axios';

function Pedidos() {
  const [cedula, setCedula] = useState()
  const [nombre, setNombre] = useState('')
  const [direccion, setDireccion] = useState('')
  const [telefono, setTelefono] = useState()
  const [correo_electronico, setCorreo_electronico] = useState('')
  const [fecha, setFecha] = useState()
  const [hora, setHora] = useState()
  const [personas, setPersonas] = useState(0)
  const [activo, setActivo] = useState(false)

  const subirDatosCliente = () => {
    Axios.post("http://localhost:3001/datosCliente/createCliente", {
      cedula: cedula,
      nombre: nombre,
      direccion: direccion,
      telefono: telefono,
      correo_electronico: correo_electronico
    }).then(
      Swal.fire(
        {
          title: '<strong>Datos enviados</strong>',
          html: 'Los datos se han enviado con éxtio',
          icon: 'success',
          timer: 3000
        }
      )
    )
  }

  const subirDatosReserva = () => {
    Axios.post("http://localhost:3001/pedidos/createReserva", {
      cedula: cedula,
      fecha: fecha,
      hora: hora,
      personas: personas
    }).then(() => {
      Swal.fire({
          title: '<strong>Pedido exitoso</strong>',
          html: 'El pedido se ha enviado con éxtio',
          icon: 'success',
          confirmButtonText: 'Ok',
      }).then((result) => {
          if (result.isConfirmed) {
              Swal.fire('Saved!', '', 'success')
          }
      })
  })
  }

  return (
    <div class='cuerpo_pedidos'>
      <h1 className="titulo">Reserva</h1>
      <br />
      <form className='reserva'>
        <div className='personal'>
          <h3>Información personal</h3>
          <label htmlFor="nombre">Nombre del cliente: </label><input type="text"
            onChange={(event) => {
              setNombre(event.target.value)
            }}
            name="nombre" placeholder='Juanito Perez' required />
          <br />
          <label htmlFor="Cedula">Cedula:</label><input type='number'
            onChange={(event) => {
              setCedula(event.target.value)
            }}
            name='Cedula' placeholder='2903672934' required />
          <br />
          <label htmlFor="dirección">Dirección</label><input type='text'
            onChange={(event) => {
              setDireccion(event.target.value)
            }}
            name='direccion' placeholder='El Rosario' required />
          <br />
          <label htmlFor="telefono">Telefono:</label><input type='number'
            onChange={(event) => {
              setTelefono(event.target.value)
            }}
            name='telefono' placeholder='111-333-555' required />
          <br />
          <label htmlFor="correo_electronico">Correo electronico:</label><input type='text'
            onChange={(event) => {
              setCorreo_electronico(event.target.value)
            }}
            name='correo_electronico' placeholder='ejemplo@gmail.com' required />
          <br />
        </div>
        <div className='info-reserva'>
          <h3>Información de la reserva</h3>
          <label for="fecha">Fecha de la reserva (De Viernes a Lunes):</label><input type='date' name='fecha'
            onChange={(event) => {
              setFecha(event.target.value);
            }}
          />
          <label for="Hora">Hora de la reserva</label><input type='time' name='Hora'
            onChange={(event) => {
              setHora(event.target.value);
            }}
          />
          <label for="personas">Personas Invitadas</label><input type='number' name='personas'
            onChange={(event) => {
              setPersonas(event.target.value)
            }}
          />
        </div>
      </form>
      <div className='botones_compra'>
        {
          (nombre !== '' & direccion !== '' & cedula !== '' & telefono !== '' & correo_electronico !== '') ?
            <button className='btn btn-success' onClick={() => {
              subirDatosCliente()
              setActivo(true)
            }}>Subir datos</button>
            : <button className='btn btn-secondary' disabled>Subir datos</button>
        }
        {
          (activo === true & fecha !== '' & hora !== '' & personas !== 0) ?
            <button className='btn btn-success' onClick={() => {
              subirDatosReserva()
            }}>Hacer reserva</button>
            : <button className='btn btn-secondary' disabled>Hacer reserva</button>
        }
      </div>
    </div>
  )
}

export default Pedidos