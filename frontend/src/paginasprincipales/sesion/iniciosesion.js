import React from 'react'
import './iniciosesion.css'
import { Link, Outlet } from 'react-router-dom';

function Iniciosesion() {
  return (
    <div>
      <Link to={'/admin'}>Admin</Link>
      <Outlet />
    </div>
  )
}

export default Iniciosesion