import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./iniciosesion.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <body className="binicio">
      <div className="inicio-sesion" id="inicio-sesion">
        <form className="forminicio" onSubmit={handleSubmit}>
          <h1>Iniciar sesión</h1>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to={'/admin'}><button type="submit" className="btn btn-primary">Sign in</button></Link>
          <Outlet />
        </form>
      </div> 
    </body>
  );
};

export default Login;