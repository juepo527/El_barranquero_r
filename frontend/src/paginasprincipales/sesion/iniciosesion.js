import React from 'react'
import './iniciosesion.css'
import { Link, Outlet } from 'react-router-dom';

function Iniciosesion() {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Inicio de sesión</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <Link to={'/admin'}><button type="submit" className="btn btn-primary">Sign in</button></Link>
        <Outlet />
      </form>
    </div>
  )
}

export default Iniciosesion