import React from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import '../../styles/components/Project/ProjectDescription.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Navigation]);


export default function ProjectDescription(props) {
  const { title, date, content, galleryImages, team } = props

  return (
    <div className='projectDescription'>
      <div className='date'>{date}</div>
      <h2>{title}</h2>
      <p>{content}</p>

      <div className='c-gallery'>

        <h3>Galeria</h3>

        <div className='gallery__carousel'>

          <Swiper
            spaceBetween={50}
            loop={true}
            navigation={true}
            className='mySwiper'
            breakpoints={{
              760: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              }
            }}
          >
            {
              galleryImages.map((img, index) => {
                return (
                  <SwiperSlide
                    key={index}>
                    <GatsbyImage image={getImage(img)} alt={`imagen ${title}`} />
                  </SwiperSlide>
                )
              })
            }


          </Swiper>

        </div>

      </div>

      <div className='c-team'>
        <h3>Ficha Tecnica</h3>

        <div className='c-team-names'>
          {
            team.map(person =>
              <div className='person'>
                <div className='team-name'>{person.name}</div>
                <div className='team-job'>{person.job}</div>
              </div>
            )
          }
        </div>
      </div>



    </div>
  )
}