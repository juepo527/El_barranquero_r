import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Axios from 'axios'
import { useState } from 'react';
import './menu.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';

function Menu() {

  let [precioT, setPrecioT] = useState(0)
  const [productos, setProductos] = useState([])
  const [menu, setMenu] = useState([])
  const [show, setShow] = useState(false); 
  const [activo, setActivo] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onAddProduct = (val) => {
    productos.push(val)
    setActivo(false)
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'success',
      title: 'Se ha agregado el producto'
    })
  }

  const vaciarCarrito = () => {
    setProductos([])
    setActivo(false)
  }

  const getMenu = () => {
    Axios.get('http://localhost:3001/menu',).then((response) => {
      setMenu(response.data);
    });
  }

  const calculateTotalPrice = () => {
    const sum = productos.reduce((accumulator, product) => accumulator + product.precio, 0);
    setPrecioT(sum);
    localStorage.setItem('cart', JSON.stringify(productos));
    localStorage.setItem('total', JSON.stringify(sum));
    setActivo(true)
  }

  const eliminarProducto = (val) => {
    let index = productos.indexOf(val);
    productos.splice(index, 1)
    setActivo(false)
  }

  getMenu();

  return (
    <div className='general'>
      <div className='contenedorUnicamenteCreadoParaIma'>
      <button onClick={handleShow} className='boton_carrito'>
        <img className='carrito_icon' src='https://res.cloudinary.com/dwjwb4mza/image/upload/v1695064965/cart-shopping-solid_xqp7j5.svg'></img>
      </button>
      </div>

      <h1>Nuestros productos</h1>

      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Lista de Productos</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <ul className='listaCarrito'>
              {productos.length == 0 ?
                <h2 style={{ color: 'red' }}>No hay elementos en el carrito</h2>
                : productos.map((producto) => (
                  <li key={producto.id_plato}>
                    {producto.nombre} ${producto.precio}
                    <button className="btn btn-danger" onClick={() => { eliminarProducto(producto) }}>Eliminar producto</button>
                    <hr />
                  </li>
                ))}
            </ul>
            <button className='btn btn-danger' onClick={() => {
              vaciarCarrito()
            }}>Vaciar carrito</button>
            <button onClick={calculateTotalPrice}>Calcular precio</button>
            <h4>Total: ${precioT}</h4>
            {activo ?
              <Link to='/datosCliente'><button className='btn btn-success'>Comprar</button></Link>
              :<button className='btn btn-secondary' disabled>Comprar</button>}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <div className='Cards'>
        {menu.map((val, key) => {
          return <div key={val.id_plato}>
            <div className="card-hover">
              <div className="card-hover__content">
                <h3 className="card-hover__title">
                  {val.nombre}
                </h3>
                <p className="card-hover__text" alt={val.nombre}>{val.descripcion}</p>
                <a className="card-hover__link">
                  <span>{val.precio}$</span>
                  <button className='boton_producto' onClick={() => {
                    onAddProduct(val)
                  }}><img className='carrito_icon' src='https://res.cloudinary.com/dwjwb4mza/image/upload/v1695064965/cart-shopping-solid_xqp7j5.svg'></img></button>
                </a>
              </div>
              <img src={val.imagen}></img>
            </div>
          </div>
        })
        }
      </div>
    </div>
  )
}

export default Menu