import { Swiper, SwiperSlide } from "swiper/react";
import MainSlider1 from "../assets/img/home/main-slider-1.png";
import MainSlider2 from "../assets/img/home/main-slider-2.png";
import MainSlider3 from "../assets/img/home/main-slider-3.png";
import MainSlider4 from "../assets/img/home/main-slider-4.png";
import logo from '../assets/img/home/main-logo_big.png'
import { Autoplay, EffectFade, Pagination } from "swiper";
import '../styles/home/main-slider.scss'
import "swiper/css/pagination";
import 'swiper/css/effect-fade'
import Button from "../common/Button";

const MainSlider = () => {
  return (
    <div className="main-slider">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        effect="fade"
        autoplay={{ 
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        speed={1000}
      >
        <SwiperSlide>
        <div className="main-slider-item" style={{
          backgroundImage: `url(${MainSlider1})`
        }} >
          <div className="main-slider-overlay">
            <div className="main-slider-overlay-text">
              <img src={logo} alt="" />
              <h3>Mechanics Services</h3>
              <h2>Creative & professional</h2>
              <Button text='Read More' link='' />
            </div>
          </div>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSlider;
