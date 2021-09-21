import React from 'react';
import '../../styles/components/Home/ExperienceSection.scss'

import imgExperience1 from '../../images/Experience_1.png'
import imgExperience2 from '../../images/Experience_2.png'
import imgExperience3 from '../../images/Experience_3.png'

// import Slider from './SliderCenter'

export default function Experience() {


  const handlerSlider = (e) => {
    console.log('click', e.target)

  }

  return (
    <section className='experience'>
      <h2 className="experience__title">Experiencia</h2>


      {/* <Slider /> */}

      {/* <div className="experience__carousel">
        <div className="experience__carouselArrowLeft">
          <svg width="15" height="27" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 3.75L5.625 13.125L15 22.5L13.125 26.25L0 13.125L13.125 0L15 3.75Z" fill="#333333" />
          </svg>

        </div>
        <div onClick={handlerSlider} className="experience__carouselItems">
          <img src={imgExperience2} alt="" />
          <img src={imgExperience3} alt="" />
          <img src={imgExperience1} alt="" />
          <img src={imgExperience1} alt="" />
          <img src={imgExperience2} alt="" />
          <img src={imgExperience3} alt="" />
          <img src={imgExperience2} alt="" />
          <img src={imgExperience3} alt="" />
          <img src={imgExperience1} alt="" />
          <img src={imgExperience1} alt="" />
          <img src={imgExperience2} alt="" />
          <img src={imgExperience3} alt="" />
        </div>
        <div className="experience__carouselArrowRight">
          <svg width="15" height="27" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3.75L9.375 13.125L0 22.5L1.875 26.25L15 13.125L1.875 0L0 3.75Z" fill="#333333" />
          </svg>
        </div>
      </div> */}

      <button className='button button--orange'>Ver Proyectos</button>
    </section>
  );
};
