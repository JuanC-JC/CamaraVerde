import React from 'react';
import HeaderBanner from '../components/Headerbanner'
import { Link } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

import ExperiencesBanner from '../images/headerBanner_2.jpg'

import '../styles/templates/experiencesTemplate.scss'


const ExperienceCard = ({ experience }) => {

  return (
    <div className="experienceCard">
      <GatsbyImage className='experienceCard__img' image={getImage(experience.data.galleryImages[0])} alt={`imagen experiencia ${experience.data.title}`} />
      <h3>{experience.data.title}</h3>
      <Link to={`/experiencia/${experience.id}`} className='button button--outline'>Ver más</Link>
    </div>
  )
}


export default function ExperiencesTemplate({ pageContext: { files } }) {

  return (
    <>
      <HeaderBanner
        img={ExperiencesBanner}
        title='Experiencias'
        color='dark-green'
      />

      <div className='experiencesContainer'>

        {
          files.map(experience => {
            return (
              <ExperienceCard
                key={experience.id}
                experience={experience}
              />
            )
          })
        }
      </div>
    </>
  );
};

