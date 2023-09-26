import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Axios from 'axios'
import { useState } from 'react';
import './menu.css'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Menu() {

  let [precioT, setPrecioT] = useState(0)
  const [productos, setProductos] = useState([])
  const [menu, setMenu] = useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onAddProduct = (val) => {
    productos.push(val)
    console.log(productos)
  }

  const getMenu = () => {
    Axios.get('http://localhost:3001/menu',).then((response) => {
      setMenu(response.data);
    });
  }

  const calculateTotalPrice = () => {
      const sum = productos.reduce((accumulator, product) => accumulator + product.precio, 0);
      setPrecioT(sum);
  }

  const eliminarProducto = (val) =>{
    let index=productos.indexOf(val);
    productos.splice(index,1)
  }

  getMenu();

  return (
    <div className='general'>
      <button onClick={handleShow} className='boton_carrito'>
        <img className='carrito_icon' src='https://res.cloudinary.com/dwjwb4mza/image/upload/v1695064965/cart-shopping-solid_xqp7j5.svg'></img>
      </button>

      <h1>Lunes</h1>

      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Lista de Productos</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <ul className='listaCarrito'>
              {productos.map((producto) => (
                <li key={producto.id_plato}>
                  {producto.nombre} ${producto.precio}
                  <button className="btn btn-danger" onClick={()=>{eliminarProducto(producto)}}>Eliminar producto</button>
                </li>
              ))}
            </ul>
            <button onClick={calculateTotalPrice}>Calcular Total</button>
            <p>Total: ${precioT}</p>
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