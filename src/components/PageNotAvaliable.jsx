import React from 'react';
import { Link } from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image'
import '../styles/components/Generic/PageNotAvaliable.scss'
// import Background from 


export default function PageNotAvaliable ({title, text}) {
    return (
    <div className='pageNotAvaliable'>
      <div className="pageNotAvaliable__text">
        <h1>{title}</h1>
        <p>{text}</p>
        <Link to='/' className='button'>Volver a Inicio</Link>
      </div>
      <StaticImage className='pageNotAvaliable__img' src={'../images/404Background.png'} alt="" />
    </div>
);
};