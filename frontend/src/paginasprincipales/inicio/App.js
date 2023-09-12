import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectCards } from 'swiper/modules';


import Body_inicio from './componentes/body_inicio';


function App() {
  return (
    <div className="App">
      <Body_inicio></Body_inicio>
    </div>
  );
}


export default App;
