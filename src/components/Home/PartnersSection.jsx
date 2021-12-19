import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import dulceMama from '../../images/Partners/dulceMama.png';
import innpulsa from '../../images/Partners/innpulsa.png';
import selloLlanero from '../../images/Partners/sello-llanero.png';
import solef from '../../images/Partners/solef.png';
import scp from '../../images/Partners/scp.png';
import octopus from '../../images/Partners/octopus.png';
import mw from '../../images/Partners/mw.png';

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
        <SwiperSlide><img src={dulceMama} alt="" /></SwiperSlide>
        <SwiperSlide><img src={innpulsa} alt="" /></SwiperSlide>
        <SwiperSlide><img src={selloLlanero} alt="" /></SwiperSlide>
        <SwiperSlide><img src={solef} alt="" /></SwiperSlide>
        <SwiperSlide><img src={scp} alt="" /></SwiperSlide>
        <SwiperSlide><img src={octopus} alt="" /></SwiperSlide>
        <SwiperSlide><img src={mw} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};
