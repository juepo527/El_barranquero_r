import React from 'react';
import "./body_inicio.css";
import { Link, Outlet } from 'react-router-dom';

function Body_inicio() {
    return (
        <div>
            <section class="hero">
                <h1>Bienvenidos a nuestro restaurante </h1>
                <p>
                    Disfruta de nuestro delicioso menú
                </p>
                <Link to={'/menu'} class="btn-cta">Ver menú</Link>
                <Outlet/>
            </section>

            <section class="about">
                <h2>Sobre nosotros</h2>
                <p>
                    Somos un restaurante campestre ubicado en un entorno natural y
                    tranquilo.
                </p>
                <a href="#" class="btn-cta">Conoce más</a>
            </section>

            <section class="menu">
                <h2>Menú del día</h2>
                <div class="menu-items">
                    <div class="menu-item">
                        <img src="#" alt="Plato 1" />
                        <h3>Nombre del plato 1</h3>
                        <p>Descripción del plato 1</p>
                        <p>Precio:</p>
                    </div>
                    <div class="menu-item">
                        <img src="#" alt="Plato 2" />
                        <h3>Nombre del plato 2</h3>
                        <p>Descripción del plato 2</p>
                        <p>Precio:</p>
                    </div>
                    <div class="menu-item">
                        <img src="#" alt="Plato 3" />
                        <h3>Nombre del plato 3</h3>
                        <p>Descripción del plato 3</p>
                        <p>Precio:</p>
                    </div>
                </div>
                <h2>Califica nuestro restaurante</h2>
                <p>¿Cómo te pareció nuestra comida y servicio? ¡Danos tu opinión!</p>
                <div class="rating">
                    <input type="radio" name="rating" value="1" id="1"/><label for="1">★</label>
                    <input type="radio" name="rating" value="2" id="2"/><label for="2">★</label>
                    <input type="radio" name="rating" value="3" id="3"/><label for="3">★</label>
                    <input type="radio" name="rating" value="4" id="4"/><label for="4">★</label>
                    <input type="radio" name="rating" value="5" id="5"/><label for="5">★</label>
                </div>
                <p>¡Gracias por tu opinión!</p>
                <Link to={'/menu'} class="btn-cta">Ver menú</Link>
                <Outlet/>
            </section>
        </div>
    )
}

export default Body_inicio