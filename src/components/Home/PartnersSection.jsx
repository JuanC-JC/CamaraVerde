import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import '../../styles/components/Home/PartnersSection.scss'
import { graphql, useStaticQuery } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';


export default function PartnersSection() {

  const {allFile: {data}} = useStaticQuery(graphql`
      query MyQuery {
        allFile(filter: {absolutePath: {regex: "/static/assets/aliado-*/"}}) {
          data: nodes {
            childImageSharp {
              gatsbyImageData
            }
          base
          }
        }
      }  
  `)
  console.log(data)

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
      {
        data.length && data.map((image,index) => (
            <SwiperSlide key={index}>
              <img src={getSrc(image)} alt={image.base} />
            </SwiperSlide>
          )
        )
      }
      </Swiper>
    </div>
  );
};