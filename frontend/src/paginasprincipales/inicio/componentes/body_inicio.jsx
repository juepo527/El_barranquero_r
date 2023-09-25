import React, { useState } from 'react';
import "./body_inicio.css";
import { Link, Outlet } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

function Body_inicio() {

    const [encuesta,setEncuesta] = useState(false)

    return (
        <div className='p_inicio'>
            <section className="hero">
                <h1>Bienvenidos a nuestro restaurante </h1>
                <p>
                    Disfruta de nuestro delicioso menú
                </p>
                <Link to={'/menu'} className="btn-cta">Ver menú</Link>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiperCarrusel"
                >
                    <SwiperSlide>
                        <img src="https://res.cloudinary.com/dwjwb4mza/image/upload/v1694464765/WhatsApp_Image_2023-09-11_at_3.38.28_PM_qgkt6i.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://res.cloudinary.com/dwjwb4mza/image/upload/v1694464765/WhatsApp_Image_2023-09-11_at_3.38.29_PM_1_xpm6ez.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://res.cloudinary.com/dwjwb4mza/image/upload/v1694464765/WhatsApp_Image_2023-09-11_at_3.38.30_PM_qkicls.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://res.cloudinary.com/dwjwb4mza/image/upload/v1694464765/WhatsApp_Image_2023-09-11_at_3.38.29_PM_czzmpf.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://res.cloudinary.com/dwjwb4mza/image/upload/v1694464765/WhatsApp_Image_2023-09-11_at_3.38.30_PM_1_zsyzgs.jpg" />
                    </SwiperSlide>
                </Swiper>

                <Outlet />
            </section>


            <section className="about">
                <h2>Sobre nosotros</h2>
                <p>
                    Somos un restaurante campestre ubicado en un entorno natural y
                    tranquilo.
                </p>
                <a href="#" className="btn-cta">Conoce más</a>
            </section>

            <section className="menu">
                <h2>Menú del día</h2>

                <div className="card">
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src='https://res.cloudinary.com/dwjwb4mza/image/upload/v1694466043/WhatsApp_Image_2023-09-11_at_3.41.59_PM_ho2fuy.jpg'></img></SwiperSlide>
                        <SwiperSlide><img src='https://res.cloudinary.com/dwjwb4mza/image/upload/v1694466043/WhatsApp_Image_2023-09-11_at_3.42.00_PM_zfhnlc.jpg'></img></SwiperSlide>
                        <SwiperSlide><img src='https://res.cloudinary.com/dwjwb4mza/image/upload/v1694466043/WhatsApp_Image_2023-09-11_at_3.42.00_PM_1_ifxceb.jpg'></img></SwiperSlide>
                        <SwiperSlide><img src='https://res.cloudinary.com/dwjwb4mza/image/upload/v1694637204/WhatsApp_Image_2023-09-13_at_3.33.00_PM_vaaafd.jpg'></img></SwiperSlide>
                    </Swiper>
                </div>
                <h2>Califica nuestro restaurante</h2>
                <p>¿Cómo te pareció nuestra comida y servicio? ¡Danos tu opinión!</p>

                <div className="rating">
                    <input type="radio" name="rating" value="1" id="1" /><label for="1">★</label>
                    <input type="radio" name="rating" value="2" id="2" /><label for="2">★</label>
                    <input type="radio" name="rating" value="3" id="3" /><label for="3">★</label>
                    <input type="radio" name="rating" value="4" id="4" /><label for="4">★</label>
                    <input type="radio" name="rating" value="5" id="5" /><label for="5">★</label>
                </div>
                <p>Deseas hacer una encuesta de satisfacción?</p>
                <button onClick={()=>{
                    setEncuesta(true)
                    console.log('hola')
                }}>Da click aquí!!!</button>
                {
                    encuesta ? (<form className='satisfacción'>
                    <fieldset class="row mb-3">
                        <legend class="col-form-label col-sm-2 pt-0">¿Consideras que los tiempos de espera entre platos fueron
                            pertinentes?</legend>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="c-1" id="gridRadios1" value="option1" checked/>
                                    <label class="form-check-label" for="gridRadios1">
                                        Si
                                    </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="c-1" id="gridRadios2" value="option2"/>
                                    <label class="form-check-label" for="gridRadios2">
                                        No
                                    </label>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset class="row mb-3">
                        <legend class="col-form-label col-sm-2 pt-0">¿Crees que el precio de nuestro producto es apropiado en
                            relacion a su calidad?</legend>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="c-2" id="gridRadios1" value="option1" checked/>
                                    <label class="form-check-label" for="gridRadios1">
                                        Si
                                    </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="c-2" id="gridRadios2" value="option2"/>
                                    <label class="form-check-label" for="gridRadios2">
                                        No
                                    </label>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset class="row mb-3">
                        <legend class="col-form-label col-sm-2 pt-0">¿Hay algún producto que le gustaría ver en nuestro menú?
                        </legend>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="c-3" id="gridRadios1" value="option1" checked/>
                                    <label class="form-check-label" for="gridRadios1">
                                        Si
                                    </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="c-3" id="gridRadios2" value="option2"/>
                                    <label class="form-check-label" for="gridRadios2">
                                        No
                                    </label>
                            </div>
                        </div>
                    </fieldset>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">Si en la respuesta anterior  marco "SI", ¿cual?</label>
                        <div class="col-sm-10">
                            <textarea type="text" class="form-control" id="inputPassword3"/>
                        </div>
                    </div>
                    <fieldset class="row mb-3">
                        <legend class="col-form-label col-sm-2 pt-0">¿Cuál es tu nivel de satisfacción de acuerdo al tiempo de entrega de tu domicilió,  fue rápido y eficiente? </legend>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="c-4" id="gridRadios1" value="option1"
                                    checked/>
                                    <label class="form-check-label" for="gridRadios1">
                                        Muy insatisfecho
                                    </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="c-4" id="gridRadios2" value="option2"/>
                                    <label class="form-check-label" for="gridRadios2">
                                        Insatisfecho
                                    </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="c-4" id="gridRadios1" value="option1"
                                    checked/>
                                    <label class="form-check-label" for="gridRadios1">
                                        Ni satisfecho ni insatisfecho
                                    </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="c-4" id="gridRadios2" value="option2"/>
                                    <label class="form-check-label" for="gridRadios2">
                                        Satisfecho
                                    </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="c-4" id="gridRadios1" value="option1"
                                    checked/>
                                    <label class="form-check-label" for="gridRadios1">
                                        Muy satisfecho
                                    </label>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset class="row mb-3">
                        <legend class="col-form-label col-sm-2 pt-0">¿Bajo su punto de vista cumplimos con una buena higiene?</legend>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="c-5" id="gridRadios1" value="option1"
                                    checked/>
                                    <label class="form-check-label" for="gridRadios1">
                                        Si
                                    </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="c-5" id="gridRadios2" value="option2"/>
                                    <label class="form-check-label" for="gridRadios2">
                                        No
                                    </label>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset class="row mb-3">
                        <legend class="col-form-label col-sm-2 pt-0">¿Cómo calificarías el estado de tu pedido después de la entrega? siendo 5 muy bueno y 1 muy malo </legend>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="c-6" id="gridRadios1" value="option1"
                                    checked/>
                                    <label class="form-check-label" for="gridRadios1">
                                        1
                                    </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="c-6" id="gridRadios2" value="option2"/>
                                    <label class="form-check-label" for="gridRadios2">
                                        2
                                    </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="c-6" id="gridRadios1" value="option1"
                                    checked/>
                                    <label class="form-check-label" for="gridRadios1">
                                        3
                                    </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="c-6" id="gridRadios2" value="option2"/>
                                    <label class="form-check-label" for="gridRadios2">
                                        4
                                    </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="c-6" id="gridRadios1" value="option1"
                                    checked/>
                                    <label class="form-check-label" for="gridRadios1">
                                        5
                                    </label>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset class="row mb-3">
                        <legend class="col-form-label col-sm-2 pt-0">¿Recomendarías nuestro servicio y productos a otros?</legend>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="c-7" id="gridRadios1" value="option1"
                                    checked/>
                                    <label class="form-check-label" for="gridRadios1">
                                        Si
                                    </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="c-7" id="gridRadios2" value="option2"/>
                                    <label class="form-check-label" for="gridRadios2">
                                        No
                                    </label>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset class="row mb-3">
                        <legend class="col-form-label col-sm-2 pt-0">¿Cómo calificarías tu estadía en nuestro establecimiento? siendo 5 muy bueno y 1 muy malo </legend>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="c-8" id="gridRadios1" value="option1"
                                    checked/>
                                    <label class="form-check-label" for="gridRadios1">
                                        1
                                    </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="c-8" id="gridRadios2" value="option2"/>
                                    <label class="form-check-label" for="gridRadios2">
                                        2
                                    </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="c-8" id="gridRadios1" value="option1"
                                    checked/>
                                    <label class="form-check-label" for="gridRadios1">
                                        3
                                    </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="c-8" id="gridRadios2" value="option2"/>
                                    <label class="form-check-label" for="gridRadios2">
                                        4
                                    </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="c-8" id="gridRadios1" value="option1"
                                    checked/>
                                    <label class="form-check-label" for="gridRadios1">
                                        5
                                    </label>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset class="row mb-3">
                        <legend class="col-form-label col-sm-2 pt-0">¿Te sientes satisfecho con nuestras instalaciones?</legend>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="c-9" id="gridRadios1" value="option1"
                                    checked/>
                                    <label class="form-check-label" for="gridRadios1">
                                        Muy insatisfecho
                                    </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="c-9" id="gridRadios2" value="option2"/>
                                    <label class="form-check-label" for="gridRadios2">
                                        Insatisfecho
                                    </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="c-9" id="gridRadios1" value="option1"
                                    checked/>
                                    <label class="form-check-label" for="gridRadios1">
                                        Ni satisfecho ni insatisfecho
                                    </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="c-9" id="gridRadios2" value="option2" />
                                <label class="form-check-label" for="gridRadios2">
                                    Satisfecho
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="c-9" id="gridRadios2" value="option2" />
                                <label class="form-check-label" for="gridRadios2">
                                    Muy satisfecho
                                </label>
                            </div>
                        </div>
                    </fieldset>
                    <div class="row mb-3">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">¿Qué le gustaría mejorar de nuestro servicio o producto?</label>
                        <div class="col-sm-10">
                            <textarea type="text" class="form-control" id="inputPassword3"/>
                        </div>
                    </div>
                    <button type='submit'>Enviar</button>
                </form>) : (<div></div>)
                }
                <br/>
                <h3>¡Gracias por tu opinión!</h3>
                <Outlet />
            </section >
        </div >
    )
}

export default Body_inicio