import React from 'react';
//componentes
import HeaderBanner from '../components/Headerbanner';
import ExperienceDescription from '../components/experience/ExperienceDescription'
import newsFund from '../images/headerBanner_2.jpg'

const ExperiencePage = (props) => {
  const { pageContext } = props
  const { data } = pageContext
  console.log(data)

  return (
    <>

      <HeaderBanner
        img={newsFund}
        title={'Experiencia'}
        color={'dark-green'}
      />

      <ExperienceDescription
        key={data.id}
        date={data.date}
        title={data.title}
        content={data.content}
        galleryImages={data.galleryImages}
        team={data.team}
      />


    </>
  )
}

export default ExperiencePage;