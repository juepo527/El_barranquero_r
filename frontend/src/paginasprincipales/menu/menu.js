import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Axios from 'axios'
import { useState } from 'react';
import './menu.css'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Menu() {

  const onAddProduct =()=>{
    console.log('add')
  }
  const [precioT, setPrecioT] = useState(0)
  const [productos, setProductos] = useState([])
  const [menu, setMenu] = useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getMenu = () => {
    Axios.get('http://localhost:3001/menu',).then((response) => {
      setMenu(response.data);
    });
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
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {()=>{if(productos.length == 0){
            return <div key={productos[0]}><h2>No hay productos en el carrito.</h2></div>}
            else{
              return  <h2>{productos}</h2>
          }}}
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
                <a href="#" className="card-hover__link">
                  <span>{val.precio}$</span>
                  <button className='boton_producto' onClick={()=>{
                    onAddProduct()
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