import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";

export default function Carousel() {
  return (
    <Swiper
      effect={"coverflow"}
      // fadeEffect={{crossfade: true}}
      autoplay={{
        delay: 4000,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true
      }}
      navigation={true}
      slidesPerView={1}
      centeredSlides={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
      className='h-[500px] max-w-4xl'
    >
      <SwiperSlide className="flex flex-col h-[500px] justify-around content-evenly bg-[url('/graphics/stock1.jpg')] bg-contain">
        <h2>Placeholder</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nam quos commodi nobis! Perferendis repudiandae voluptate, aspernatur fuga odio dignissimos ullam vitae consectetur qui vel, quae exercitationem, facere unde sit.</p>
        <button className='bg-slate-600 p-2 mx-auto'>Button</button>
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
