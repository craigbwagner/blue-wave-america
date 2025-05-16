import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/effect-coverflow";

export default function Carousel() {
  return (
    <Swiper
      effect={"coverflow"}
      autoplay={{
        delay: 5000,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true
      }}
      navigation={true}
      slidesPerView={1}
      centeredSlides={true}
      modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
      className='h-[600px] max-w-4xl my-6'
    >
      <SwiperSlide className="flex flex-col h-[500px] justify-around content-evenly">
        <img src='/graphics/carousel1.jpeg' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='/graphics/carousel3.jpeg' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='/graphics/carousel4.jpeg' />
      </SwiperSlide>
    </Swiper>
  );
};
