import React from "react";
import "./footer.css";
import { FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="mapa">
        <h2>¿Cómo llegar?</h2>
        <div className="bg-white text-left" id="waze">
          <div className="container-fluid py-0">
            <div className="row slide-in-blurred-bottom">
              <div className="col py-0 px-0 list-group-item-secondary text-center">
                <div className="list-group list-group-horizontal-md mx-0 px-0">
                  <a
                    href="https://www.google.com/maps/place/El+Barranquero+Restaurante/@6.2566121,-75.4953405,1142m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8e44274acb3890a5:0x434afdee5a294ea7!8m2!3d6.2566068!4d-75.4927656!16s%2Fg%2F11lglnhy9d?hl=es&entry=ttu"
                    target="_blank"
                    className="list-group-item list-group-item-action list-group-item-secondary flex-fill border-1-solid-black rounded-0 pt-0 bg-change slide-in-blurred-bottom"
                    aria-current="true"
                  >
                    <div className="mt-0 d-block">
                      <svg
                        width="100"
                        height="100"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ width: '125px', height: '125px' }}
                      >
                        <div className="mapa">
                        <path
                          className="stroke1 fill1"
                          d="M75.5316 69L93.865 91H56H55.6972L55.4453 91.1679L50 94.7982L44.5547 91.1679L44.3028 91H44H6.13504L24.4684 69H75.5316Z"
                          fill="rgba(38,194,129,1)"
                          stroke="rgba(255,255,255,1)"
                          strokeWidth="2px"
                          style={{ animationDuration: '3s' }}
                        ></path>
                        <g className="line-map1" style={{ animationDuration: '3s' }}>
                          <path
                            className="stroke2 fill2"
                            d="M77 39C77 43.2607 75.3357 48.0262 72.7445 52.8384C70.1614 57.6356 66.7048 62.3926 63.2281 66.6143C59.7541 70.8326 56.2774 74.4959 53.6679 77.1054C52.3637 78.4096 51.2776 79.4491 50.5187 80.1616C50.3235 80.3448 50.15 80.5064 50 80.6452C49.85 80.5064 49.6765 80.3448 49.4813 80.1616C48.7224 79.4491 47.6363 78.4096 46.3321 77.1054C43.7226 74.4959 40.2459 70.8326 36.7719 66.6143C33.2952 62.3926 29.8386 57.6356 27.2555 52.8384C24.6643 48.0262 23 43.2607 23 39C23 24.0883 35.0883 12 50 12C64.9117 12 77 24.0883 77 39Z"
                            fill="rgba(246,71,71,1)"
                            stroke="rgba(255,255,255,1)"
                            strokeWidth="2px"
                          ></path>
                          <circle
                            className="stroke2 fill2"
                            cx="50"
                            cy="39"
                            r="10"
                            fill="rgba(255,255,255,1)"
                            stroke="rgba(246,71,71,1)"
                            strokeWidth="2px"
                          ></circle>
                        </g>
                        </div>
                      </svg>
                    </div>
                    <h5 className="mb-0">Guía</h5>
                    <small className="text-muted">Ver en el mapa</small>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="derechos">
        <div>
        <img src="https://res.cloudinary.com/dwjwb4mza/image/upload/v1692912171/el_barranquero/ergaaa4qzumx858l0vhv.png"></img>
        <img src="https://res.cloudinary.com/dwjwb4mza/image/upload/v1692912194/el_barranquero/rmu5kwenb1huk0hbmmoz.png"></img>
        </div>
        <h4>Todos los derechos son reservados©</h4>
        </div>
      <div className="redes">
        <a href="https://m.facebook.com/ELBARRANQUERORESTAURANTE" target="blank"><img src='https://res.cloudinary.com/dwjwb4mza/image/upload/v1692903520/facebook_apxdwf.png'></img></a>
        <a target="blank" href="https://instagram.com/elbarranquerorestaurante?igshid=MzRlODBiNWFlZA=="><img src='https://res.cloudinary.com/dwjwb4mza/image/upload/v1692903520/instagram_2_tq9rdy.png'></img></a>
        <h3>Número de teléfono: +57 3052787855</h3>
      </div>
    </footer>
  );
};

export default Footer;