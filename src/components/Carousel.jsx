import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
      slidesPerView={1}
      centeredSlides={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      className='h-[500px] max-w-4xl'
    >
      <SwiperSlide>
        <img src='/graphics/stock1.jpg' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='/graphics/stock2.jpg' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='/graphics/stock3.jpg' />
      </SwiperSlide>
    </Swiper>
  );
};
