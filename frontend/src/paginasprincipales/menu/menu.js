import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Axios from 'axios'
import { useState } from 'react';
import './menu.css'
import { UserCard } from 'react-ui-cards';



function Menu() {
  

  const [Menu, setMenu] = useState([])

  const getMenu = () => {
    Axios.get('http://localhost:3001/menu',).then((response) => {
      setMenu(response.data);
    });
  }
  getMenu();

  return (
    <div className='general'>
      <h1 className='tprincipal'>¡Este es nuestro menu del dia!</h1>
      <div>
        <template className='cards'>
          {
            Menu.map((val, key) => {
              return <div key={val.id} className="card">
                <img src={val.imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{val.nombre}</h5>
                  <p className="card-text">{val.descripcion}</p>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">{val.precio}</small>
                </div>
              </div>
            })
          }
        </template>
      </div>
    </div>
  )
}

export default Menu