import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/effect-coverflow";


const carouselImages = [
  { src: "/carousel1.webp", alt: ""},
  { src: "/carousel2.webp", alt: ""},
  { src: "/carousel3.webp", alt: ""}
];

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
      {carouselImages.map((image) => (
        <SwiperSlide>
          <img
            src={image.src}
            alt={image.alt}
            className="object-cover w-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
