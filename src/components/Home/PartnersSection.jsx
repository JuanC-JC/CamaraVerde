import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'

import Cormacarena from '../../images/Partners/Cormacarena.png'
import CamaraComercio from '../../images/Partners/CamaraComercio.png'

import '../../styles/components/Home/PartnersSection.scss'


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
        slidesPerView={1}
        loop={true}
        breakpoints={{
          480: {
            slidesPerView: 2,
          },
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
