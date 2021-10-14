import React from 'react';
import { translateDate, transformDate } from '../../utils'
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import DropDownList from './DropDownList';
import '../../styles/components/Experience/ExperienceDescription.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

SwiperCore.use([Navigation]);

export default function ExperienceDescription(props) {
  const { title, date, content, galleryImages, team, galleryPartners } = props

  const newContent = content.split('\n\n')


  return (
    <div className='experienceDescription'>
      {date.finish === '' ? <div className='notification inAction'>En Ejecución</div> : <div className='notification'>Finalizado</div>}

      <h2>{title}</h2>

      <div className='content'>

        {newContent.map((parrafo) => (
          <>
            <p>
              {parrafo}
            </p>
            <br />
          </>
        ))}

      </div>

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
                slidesPerView: 2,
              }
            }}
          >
            {
              galleryImages.map((img, index) => {
                return (
                  <SwiperSlide
                    key={index}>
                    <GatsbyImage className='experience__img' image={getImage(img)} alt={`imagen ${title}`} />
                  </SwiperSlide>
                )
              })
            }


          </Swiper>

        </div>

      </div>

      <div className='c-dateRange'>
        <div className='dateRange'>
          <div className='dateRange__text'>Fecha de Inicio:</div>
          <div className='dateRange__date'>{translateDate(date.init)}</div>
        </div>
        <div className='dateRange'>
          <div className='dateRange__text'>Fecha de Finalización:</div>
          {date.finish !== '' && <div className='dateRange__date'>{transformDate(date.finish)}</div>}

        </div>
      </div >

      <div className="dataSheet">
        <h3>Ficha Técnica</h3>

        <div className='c-team'>
          <DropDownList title={'Equipo de trabajo'}>
            <div className='c-team-names'>
              {
                team.map((person, index) =>
                  <div className='person' key={index}>
                    <div className='team-name'>{person.name}</div>
                    <div className='team-job'>{person.job}</div>
                  </div>
                )
              }
            </div>
          </DropDownList>
        </div>

        <div className="c-partners">
          <DropDownList title={'Socios y cooperantes'}>
            <div className="g-partners">
              {
                galleryPartners.map((partner, index) =>
                  <GatsbyImage key={index} className='partner__img' image={getImage(partner)} alt={'Socio y asociado'} />
                )
              }
            </div>

          </DropDownList>
        </div>

        <div className="c-activities">
          <DropDownList title={'Actividades'}>

          </DropDownList>
        </div>
      </div>


    </div >
  )

}