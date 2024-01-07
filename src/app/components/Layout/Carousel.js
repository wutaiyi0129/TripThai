'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from 'next/image';
import {CarouselInfo} from '/Users/tony/Desktop/food-order/src/app/MenuInfo.js'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay} from 'swiper/modules';

export default function Carousel()  {
  return (

<Swiper className="w-max swiper mt-8"
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
    
      {CarouselInfo.map(item=>(
          <SwiperSlide> 
        <Image
          src={item.url} 
          alt={item.name}
          width={700} 
          height={500}
          key={item.name}
          />
     </SwiperSlide>
      ))}
    </Swiper>
  );
};