import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function Carousel() {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src='/graphics/stock1.jpg' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='/graphics/stock1.jpg' />
      </SwiperSlide>
    </Swiper>
  );
};
