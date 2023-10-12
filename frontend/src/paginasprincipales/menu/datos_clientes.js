import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './datos_clientes.css'
import Swal from 'sweetalert2';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const Datos_clientes = () => {
    const cartData = JSON.parse(localStorage.getItem('cart'));
    const total = JSON.parse(localStorage.getItem('total'))
    const [cedula, setCedula] = useState()
    const [metodo, setMetodo] = useState('domicilio')
    const [nombre, setNombre] = useState('')
    const [direccion, setDireccion] = useState('')
    const [telefono, setTelefono] = useState()
    const [correo_electronico, setCorreo_electronico] = useState('')
    const [id_platos, setIdPlatos] = useState([])
    const [lista_platos, setLista] = useState('')
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

    const subirDatosPedido = () => {
        Axios.post("http://localhost:3001/datosCliente/createPedido", {
            cedula: cedula,
            metodo: metodo,
            total: total
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
        <div className='cuerpo_clientes'>
            <h1>Datos del cliente</h1>
            <form className='reserva'>
                <div className='datos_cliente'>
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
                        <label htmlFor='metodo'>Método de pedido</label><br /><select
                            onChange={(event) => {
                                setMetodo(event.target.value)
                            }} id="select_metodo">
                            <option value='domicilio'>Domicilio</option>
                            <option value='recoge'>Compra y recoge</option>
                        </select>
                    </div>
                </div>
                <div className='descripcion_compra'>
                    <h2>Detalles de la compra</h2>
                    <div>{cartData.map((producto) => {
                        id_platos.push(producto.id_plato)
                        return <div key={producto.id_plato}>
                            <h3>{producto.nombre}</h3>
                            <h3>{producto.precio}</h3>
                            <hr />
                        </div>
                    })}</div>
                    <h2>Total: ${total}</h2>
                </div>
            </form >
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
                    activo ?
                        <button className='btn btn-success' onClick={() => {
                            subirDatosPedido()
                        }}>Hacer pedido</button>
                        : <button className='btn btn-secondary' disabled>Hacer pedido</button>
                }
                <Link to="/app"><button className='btn btn-primary'>Volver al inicio</button></Link>
            </div>
        </div >
    )
}

export default Datos_clientes