import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Axios from 'axios'
import { useState } from 'react';
import './menu.css'
import '@coreui/coreui/dist/css/coreui.min.css'



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
     
      </div>
    </div>
  )
}

export default Menu