import React from 'react';
import '../../styles/components/Home/ExperienceSection.scss'
import SliderCenter from '../Home/SliderCenter';


export default function Experience() {

  return (
    <section className='experience'>
      <h2 className="experience__title">Experiencia</h2>
      <SliderCenter></SliderCenter>
      <button className='button button--orange'>Ver Proyectos</button>
    </section>
  );
};
