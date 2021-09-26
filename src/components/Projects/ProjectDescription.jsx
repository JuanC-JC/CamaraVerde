import React from 'react';
import '../../styles/components/Project/ProjectDescription.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css'
// import 'swiper/css/bundle'
// import "swiper/css/navigation"


export default function ProjectDescription (props){
  const {title, date, text, galeria, team}=props
  return(
    <div className='projectDescription'>
      <div className='date'>{date}</div>
      <h2>{title}</h2>
      <p>{text}</p>

      <div className='c-gallery'>

        <h3>Galeria</h3>

        <div className='gallery__carousel'>

          <Swiper
            spaceBetween={50}
            loop={true}
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
            {/* {
            galeria.map((img,index)=>{
              <SwiperSlide>                
                <img src={img} alt="" />
              </SwiperSlide>
            })
          }
       */}
          <SwiperSlide>hello1</SwiperSlide>
          <SwiperSlide>hello2</SwiperSlide>
          <SwiperSlide>hello3</SwiperSlide>

          </Swiper>

        </div>
        
      </div>

      <div className='c-team'>
        <h3>Ficha Tecnica</h3>
        
        <div className='c-team-names'>
          {
            team.map(person=>
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