import React from 'react';
//componentes
import HeaderBanner from '../components/Headerbanner';
import ExperienceDescription from '../components/Experience/ExperienceDescription'
import newsFund from '../images/headerBanner_2.jpg'
import Seo from '../components/Seo'

const ExperiencePage = (props) => {
  const { pageContext } = props
  const { data } = pageContext

  return (
    <>
      <Seo title={data.title} image={data.image} isPost />
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
        activities={data.activities}
        team={data.team}
      />


    </>
  )
}

export default ExperiencePage;