import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Brands1 from "../assets/img/home/brands-1.png";
import Brands2 from "../assets/img/home/brands-2.png"
import Brands3 from "../assets/img/home/brands-3.png"
import Brands4 from "../assets/img/home/brands-4.png"
import Brands5 from "../assets/img/home/brands-5.png"
import Brands6 from "../assets/img/home/brands-6.png"
import "../styles/home/brands.scss";
import BrandsItem from "../common/BrandsItem";
import { Autoplay } from "swiper";

const Brands = () => {
  return (
    <div className="brands-section">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        slidesPerView={6}
        speed={2000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          1200:{
            slidesPerView: 6
          },
          991:{
            slidesPerView: 5
          },
          766: {
            slidesPerView: 4
          },
          0: {
            slidesPerView: 3
          }
        }}
      >
        <SwiperSlide>
          <BrandsItem img={Brands1} alt="Brands 1" />
        </SwiperSlide>
        <SwiperSlide>
          <BrandsItem img={Brands2} alt="Brands 2" />
        </SwiperSlide>
        <SwiperSlide>
          <BrandsItem img={Brands3} alt="Brands 3" />
        </SwiperSlide>
        <SwiperSlide>
          <BrandsItem img={Brands4} alt="Brands 4" />
        </SwiperSlide>
        <SwiperSlide>
          <BrandsItem img={Brands5} alt="Brands 5" />
        </SwiperSlide>
        <SwiperSlide>
          <BrandsItem img={Brands6} alt="Brands 6" />
        </SwiperSlide>
        <SwiperSlide>
          <BrandsItem img={Brands1} alt="Brands 1" />
        </SwiperSlide>
        <SwiperSlide>
          <BrandsItem img={Brands2} alt="Brands 2" />
        </SwiperSlide>
        <SwiperSlide>
          <BrandsItem img={Brands3} alt="Brands 3" />
        </SwiperSlide>
        <SwiperSlide>
          <BrandsItem img={Brands4} alt="Brands 4" />
        </SwiperSlide>
        <SwiperSlide>
          <BrandsItem img={Brands5} alt="Brands 5" />
        </SwiperSlide>
        <SwiperSlide>
          <BrandsItem img={Brands6} alt="Brands 6" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Brands;
