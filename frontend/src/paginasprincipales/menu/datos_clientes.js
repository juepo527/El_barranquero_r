import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './datos_clientes.css'
import Swal from 'sweetalert2';
import Axios from 'axios';
import { Link } from 'react-router-dom'

const Datos_clientes = () => {
    const cartData = JSON.parse(localStorage.getItem('cart'));
    const total = JSON.parse(localStorage.getItem('total'))
    const [metodo, setMetodo] = useState('domicilio')
    const [nombre, setNombre] = useState('')
    const [direccion, setDireccion] = useState('')
    const [telefono, setTelefono] = useState()
    const [correo_electronico, setCorreo_electronico] = useState('')
    const [id_platos, setIdPlatos] = useState([])

    const subirDatos = () =>{
        Axios.post("http://localhost:3001/datosCliente/create",{
            nombre:nombre,
            direccion:direccion,
            telefono:telefono,
            correo_electronico:correo_electronico,
            metodo:metodo,
            carData:cartData,
            total:total
        }).then(()=>{
            Swal.fire({
                title: '<strong>Compra exitosa</strong>',
                html: 'El pedido se ha enviado con éxtio',
                icon: 'success',
                timer:3000
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
                        onChange={(event)=>{
                            setNombre(event.target.value)
                        }}
                        name="nombre" placeholder='Juanito Perez' required/>
                        <br />
                        <label htmlFor="dirección">Dirección</label><input type='text' 
                        onChange={(event)=>{
                            setDireccion(event.target.value)
                        }}
                        name='direccion' placeholder='El Rosario' required/>
                        <br />
                        <label htmlFor="telefono">Telefono:</label><input type='number' 
                        onChange={(event)=>{
                            setTelefono(event.target.value)
                        }}
                        name='telefono' placeholder='111-333-555' required/>
                        <br />
                        <label htmlFor="correo_electronico">Correo electronico:</label><input type='text' 
                        onChange={(event)=>{
                            setCorreo_electronico(event.target.value)
                        }}
                        name='correo_electronico' placeholder='ejemplo@gmail.com' required/>
                        <br />
                        <label htmlFor='metodo'>Método de pedido</label><br/><select
                        onChange={(event)=>{
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
                {console.log(id_platos)}
            </form >
            <div className='botones_compra'>
                {
                    (nombre !== '' & direccion !== '' & telefono !== '' & correo_electronico!=='')?
                    <button className='btn btn-success' onClick={()=>{
                        subirDatos()
                    }}>Hacer pedido</button>
                    :<button className='btn btn-secondary'disabled>Hacer pedido</button>
                }
                <Link to="/app"><button className='btn btn-danger'>Cancelar</button></Link>
            </div>
        </div >
    )
}

export default Datos_clientes