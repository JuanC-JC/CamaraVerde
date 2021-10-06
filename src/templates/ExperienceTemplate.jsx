import React from 'react';
//componentes
import HeaderBanner from '../components/Headerbanner';
import ExperienceDescription from '../components/Experience/ExperienceDescription'
import newsFund from '../images/headerBanner_2.jpg'
import {translateDate} from '../utils'

const ExperiencePage = (props) => {
  const { pageContext } = props
  const { data } = pageContext

  return (
    <>

      <HeaderBanner
        img={newsFund}
        title={'Experiencia'}
        color={'dark-green'}
      />

      <ExperienceDescription
        key={data.id}
        date={translateDate(data.date)}
        title={data.title}
        content={data.content}
        galleryImages={data.galleryImages}
        team={data.team}
      />


    </>
  )
}

export default ExperiencePage;