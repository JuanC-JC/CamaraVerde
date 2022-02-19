import React from 'react';
import { Link } from 'gatsby'
import '../../styles/components/Home/DonationOption.scss'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function DonationOption(props) {
  const { title, paragraph, img, link, textBotton } = props

  return (
    <div className='donationOption'>
      <GatsbyImage
        image={getImage(img)}
        alt="Opcion para donar"
        className='donationOption__img' />
      <h3>{title}</h3>
      <p>{paragraph}</p>
      <a target='_blank' className='button button--outline' href={link}>{textBotton}</a>
    </div>
  )
}