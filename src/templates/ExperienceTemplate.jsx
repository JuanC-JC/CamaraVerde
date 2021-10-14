import React from 'react';
//componentes
import HeaderBanner from '../components/Headerbanner';
import ExperienceDescription from '../components/Experience/ExperienceDescription'
import newsFund from '../images/headerBanner_2.jpg'
import SEO from '../components/Seo'

const ExperiencePage = (props) => {
  const { pageContext } = props
  const { data } = pageContext

  return (
    <>
      <SEO title={data.title} image={data.image} isPost />
      <HeaderBanner
        img={newsFund}
        title={'Experiencia'}
        color={'dark-green'}
      />

      <ExperienceDescription
        key={data.id}
        date={data.dateRange}
        title={data.title}
        content={data.content}
        galleryImages={data.galleryImages}
        galleryPartners={data.galleryPartners}
        activicties={data.activicties}
        team={data.team}
      />


    </>
  )
}

export default ExperiencePage;