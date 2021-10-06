import React, { useRef, useEffect } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/bundle'
import "swiper/css/navigation"
import '../../styles/components/Home/ExperienceSection.scss'


SwiperCore.use([Pagination, Navigation, Autoplay])

export default function Experience() {

  const carousel = useRef(null);

  let { files: { data } } = useStaticQuery(graphql`
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

  data = data.concat(data)

  //bug visual mientras copio y saco los botones de aca..
  useEffect(() => {
    const buttonPrev = document.querySelector('.swiper-button-prev')
    const buttonNext = document.querySelector('.swiper-button-next')

    buttonPrev.classList.add('visibility')
    buttonNext.classList.add('visibility')
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
            "clickable": false
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
            data.map((experience, index) => {

              return (
                <SwiperSlide
                  key={experience.id + index}>
                  <div className='experienceCard'>
                    <GatsbyImage className='experienceCard__img' image={getImage(experience.data.galleryImages[0])} alt="" />
                    <h3>{experience.data.title}</h3>
                    <Link to={`experiencia/${experience.id}`} className='button button--small'>Ver mas</Link>
                  </div>
                </SwiperSlide>
              )
            }

            )
          }
        </Swiper>

      </div>

      <Link to='/experiencias/1' className="button button--orange">Más Experiencias</Link>
      
    </section >
  );
};

