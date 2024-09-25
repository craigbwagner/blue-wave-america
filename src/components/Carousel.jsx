import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function Carousel() {
  return (
    <Swiper
      effect={"fade"}
      autoplay={{
        delay: 4000,
        pauseOnMouseEnter: true
      }}
      pagination={{
        clickable: true
      }}
      navigation={true}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
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
