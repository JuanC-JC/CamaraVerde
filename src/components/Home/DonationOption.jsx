import React from 'react';
import '../../styles/components/Home/DonationOption.scss'

export default function DonationOption (props){
  const {title, paragraph, img, textBotton } = props
  return(
    <div className='donationOption'>
      <img 
        src={img}  
        alt="Opcion para donar" 
        className='donationOption__img'/>
      <h3>{title}</h3>
      <p>{paragraph}</p>
      <button className='button button--outline'>{textBotton}</button>
    </div>
  )
}