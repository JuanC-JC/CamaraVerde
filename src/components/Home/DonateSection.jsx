import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import DonationOption from './DonationOption';

//imagenes
import donationOne from '../../images/Donation/donacion.png';
import donationTwo from '../../images/Donation/donation1.png';
import donationThree from '../../images/Donation/donation2.png';
import donationFour from '../../images/Donation/donation3.png';

import '../../styles/components/Home/DonateSection.scss';

const donationOptions = [
  {
    id: '1',
    title: 'Afiliate',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id varius ut sit a ipsum nam et ut.',
    img: donationOne,
    textBotton: 'Inscribete'
  },
  {
    id: '2',
    title: 'Dona',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id varius ut sit a ipsum nam et ut.',
    img: donationTwo,
    textBotton: 'Inscribete'
  },
  {
    id: '3',
    title: 'Voluntariado',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id varius ut sit a ipsum nam et ut.',
    img: donationThree,
    textBotton: 'Inscribete'
  },
  {
    id: '4',
    title: 'Ideas verdes',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id varius ut sit a ipsum nam et ut.',
    img: donationFour,
    textBotton: 'Inscribete'
  }
]

export default function DonateSection() {
  return (
    <section className='c-donate'>

      <div className='c-donate__definition'>

        <StaticImage
          src='../../images/donateBackground.png'
          alt="Selva con el logo"
          placeholder='blurred'
          className='definition__image'
        />

        <div className="definition__text">
          <h2>¿Te gustaría ayudarnos?</h2>
          <p>Al igual que tú, muchas personas alrededor del mundo buscan una solución para proteger la vida silvestre, detener la deforestación, promover energías renovables y empoderar a las comunidades para la conservación de sus recursos. Puedes hacer parte de esta comunidad de más de 6 millones de miembros en 100 países.</p>
          <button className='button button--orange'>Realiza una donación</button>
        </div>

      </div>

      <div className='c-donate__options'>

        <h3>¿Qué puedes hacer para ayudarnos?</h3>

        <div className='donate__options'>
          {
            donationOptions.map((option, index) =>
              <DonationOption
                key={option.id}
                title={option.title}
                paragraph={option.paragraph}
                img={option.img}
                textBotton={option.textBotton} />)
          }
        </div>
      </div>

    </section>
  )
}