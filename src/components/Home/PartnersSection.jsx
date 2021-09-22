import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper'

import Cormacarena from '../../images/Partners/Cormacarena.png'
import CamaraComercio from '../../images/Partners/CamaraComercio.png'


import '../../styles/components/Home/PartnersSection.scss'

SwiperCore.use([Pagination, Navigation, Autoplay])


export default function PartnersSection() {
  return (
    <div className='partners'>
      <h2>Aliados & cooperantes</h2>
      <Swiper
        spaceBetween={50}
        autoplay={{
          "delay": 2500,
          "disableOnInteraction": false
        }}
        slidesPerView={2}
        loop={true}
        breakpoints={{
          760: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          }
        }}
      >
        <SwiperSlide><img src={Cormacarena} alt="" /></SwiperSlide>
        <SwiperSlide><img src={CamaraComercio} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Cormacarena} alt="" /></SwiperSlide>
        <SwiperSlide><img src={CamaraComercio} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Cormacarena} alt="" /></SwiperSlide>
        <SwiperSlide><img src={CamaraComercio} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};
