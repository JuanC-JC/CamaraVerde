import React, { useState, useRef, useEffect } from 'react';

import imgExperience1 from '../../images/Experience/Experience_1.png'
import imgExperience2 from '../../images/Experience/Experience_2.png'
import imgExperience3 from '../../images/Experience/Experience_3.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/bundle'
import '../../styles/components/Home/ExperienceSection.scss'


SwiperCore.use([Pagination, Navigation])

export default function Experience() {

  const state = useRef(false)
  const lastX = useRef(0)
  const carousel = useRef(null);
  const carouselPosition = useRef(0)

  const handlerSlider = (e) => {
    state.current = !state.current

    // if (e.type == 'mouseup') {
    lastX.current = e.clientX
    // }

    // console.log(lastX, e.clientX)

    // carousel.current.style.background = 'red';
    // console.log(carousel.current.style.background = 'red')
  }

  const handleMove = (e) => {

    // if (state.current) {
    //   console.log('move ->', 'newPos', e.clientX, 'lastPos', lastX.current, e.clientX - lastX.current)

    // carouselPosition.current += 3

    // document.getElementsByClassName('experience__carouselItems')[0].style.transform = `translateX(${carouselPosition.current}px)`;

    // carousel.current.style.background = 'red'
    // }
  }


  useEffect(() => {

    console.log(carousel.current)
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
        {/* <div className="experience__carouselArrowLeft">
          <svg width="15" height="27" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 3.75L5.625 13.125L15 22.5L13.125 26.25L0 13.125L13.125 0L15 3.75Z" fill="#333333" />
          </svg>
        </div> */}


        <Swiper
          spaceBetween={25}
          // slidesPerView={1}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
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
    </section>
  );
};
