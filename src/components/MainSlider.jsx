import { Swiper, SwiperSlide } from "swiper/react";
import MainSlider1 from "../assets/img/home/main-slider-1.png";
import MainSlider2 from "../assets/img/home/main-slider-2.png";
import MainSlider3 from "../assets/img/home/main-slider-3.png";
import MainSlider4 from "../assets/img/home/main-slider-4.png";
import { Autoplay, EffectFade, Pagination } from "swiper";
import '../styles/home/main-slider.scss'
import "swiper/css/pagination";
import 'swiper/css/effect-fade'
import MainSliderItem from "../common/MainSliderItem";

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
          <MainSliderItem backgroundImage={MainSlider1} linkText='Read More' linkUrl='' />
        </SwiperSlide>
        <SwiperSlide>
          <MainSliderItem backgroundImage={MainSlider2} linkText='Read More' linkUrl='' />
        </SwiperSlide>
        <SwiperSlide>
          <MainSliderItem backgroundImage={MainSlider3} linkText='Read More' linkUrl='' />
        </SwiperSlide>
        <SwiperSlide>
          <MainSliderItem backgroundImage={MainSlider4} linkText='Read More' linkUrl='' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSlider;
