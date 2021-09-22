import React, { useRef, useEffect } from 'react';

import imgExperience1 from '../../images/Experience/Experience_1.png'
import imgExperience2 from '../../images/Experience/Experience_2.png'
import imgExperience3 from '../../images/Experience/Experience_3.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/bundle'
import "swiper/css/navigation"
import '../../styles/components/Home/ExperienceSection.scss'


SwiperCore.use([Pagination, Navigation, Autoplay])

export default function Experience() {

  const carousel = useRef(null);

  useEffect(() => {
    const buttonPrev = document.querySelector('.swiper-button-prev')
    const buttonNext = document.querySelector('.swiper-button-next')
    carousel.current.insertAdjacentElement('afterbegin', buttonPrev)
    carousel.current.insertAdjacentElement('beforeend', buttonNext)
    //
  }, [])

  return (
    <section className='experience'>
      <h2 className="experience__title">Experiencia</h2>

      <div ref={carousel} className="experience__carousel">


        <Swiper
          spaceBetween={50}
          autoplay={{
            "delay": 2500,
            "disableOnInteraction": false
          }}
          loop={true}
          pagination={{
            "clickable": true
          }}
          navigation={true}
          breakpoints={{
            760: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            }
          }}
        >
          <SwiperSlide>
            <div className='experienceCard'>
              <img src={imgExperience1} alt="" />
              <h3>Lorem Ipsum dolor sit ameth</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='experienceCard'>
              <img src={imgExperience2} alt="" />
              <h3>Lorem Ipsum dolor sit ameth</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='experienceCard'>
              <img src={imgExperience3} alt="" />
              <h3>Lorem Ipsum dolor sit ameth</h3>
            </div>
          </SwiperSlide>
        </Swiper>

      </div>

      <button className='button button--orange'>Ver Proyectos</button>
    </section >
  );
};
