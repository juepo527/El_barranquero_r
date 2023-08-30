import React from 'react';
import "./body_inicio.css";
import { Link, Outlet } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { ChakraProvider } from '@chakra-ui/react'


   


function Body_inicio() {
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
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
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
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
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
                <p>¡Gracias por tu opinión!</p>
                <Link to={'/menu'} className="btn-cta">Ver menú</Link>
                <Outlet />
            </section >
        </div >
    )
}

export default Body_inicio