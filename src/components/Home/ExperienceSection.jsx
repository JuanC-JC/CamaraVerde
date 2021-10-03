import React, { useRef, useEffect } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import imgExperience1 from '../../images/Experience/Experience_4.png'
import imgExperience2 from '../../images/Experience/Experience_2.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/bundle'
import "swiper/css/navigation"
import '../../styles/components/Home/ExperienceSection.scss'


SwiperCore.use([Pagination, Navigation, Autoplay])

export default function Experience() {

  const carousel = useRef(null);

  const { files: { data } } = useStaticQuery(graphql`
    query getExperienceFiles {
      files: allMdx(
        filter: {fileAbsolutePath: {regex: "/experiencias/"}}
        limit: 6
      ) {
        data: nodes {
          id
          data: frontmatter {
            title
            galleryImages {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)

  useEffect(() => {
    const buttonPrev = document.querySelector('.swiper-button-prev')
    const buttonNext = document.querySelector('.swiper-button-next')
    carousel.current.insertAdjacentElement('afterbegin', buttonPrev)
    carousel.current.insertAdjacentElement('beforeend', buttonNext)
  }, [])


  return (
    <section className='experience'>
      <h2 className="experience__title">Experiencia</h2>

      <div ref={carousel} className="experience__carousel">

        <Swiper
          spaceBetween={50}
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
          {
            data.map(experience => {

              return (
                <SwiperSlide
                  key={experience.id}>
                  <div className='experienceCard'>
                    <GatsbyImage className='experienceCard__img' image={getImage(experience.data.galleryImages[0])} alt="" />
                    <h3>{experience.data.title}</h3>
                    <Link to={`experiencia/${experience.id}`} className='button'>Ver mas</Link>
                  </div>
                </SwiperSlide>
              )
            }

            )
          }
          <SwiperSlide>
            <div className='experienceCard'>
              <img className='experienceCard__img' src={imgExperience1} alt="" />
              <h3>Lorem Ipsum dolor sit ameth</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='experienceCard'>
              <img className='experienceCard__img' src={imgExperience2} alt="" />
              <h3>Lorem Ipsum dolor sit ameth</h3>
            </div>
          </SwiperSlide>


        </Swiper>

      </div>

      <button className="button button--orange">Más Proyectos</button>


    </section >
  );
};



