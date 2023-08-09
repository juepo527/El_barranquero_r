import React from 'react'
import './iniciosesion.css'
import { Link, Outlet } from 'react-router-dom';

function Iniciosesion() {
  return (
    <div>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Inicio de sesión</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Contraseña</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <Link to={'/admin'}><button type="submit" class="btn btn-primary">Sign in</button></Link>
        <Outlet />
      </form>
    </div>
  )
}

export default Iniciosesion