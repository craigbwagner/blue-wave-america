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
      className='h-[600px] max-w-4xl'
    >
      <SwiperSlide className="flex flex-col h-[500px] justify-around content-evenly">
        {/* <h2>Placeholder</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nam quos commodi nobis! Perferendis repudiandae voluptate, aspernatur fuga odio dignissimos ullam vitae consectetur qui vel, quae exercitationem, facere unde sit.</p>
        <button className='bg-slate-600 p-2 mx-auto'>Button</button> */}
        <img src='/graphics/carousel1.jpeg' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='/graphics/carousel2.jpg' />
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
