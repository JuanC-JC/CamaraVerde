import React from 'react';
import HeaderBanner from '../components/Headerbanner'

import ExperiencesBanner from '../images/headerBanner_2.jpg'

export default function ExperiencesTemplate({ pageContext }) {


  return (
    <div className='experiences'>
      <HeaderBanner
        img={ExperiencesBanner}
        title='Experiencias'
        color='dark-green'
      />

      <div>Test</div>
    </div>
  );
};
