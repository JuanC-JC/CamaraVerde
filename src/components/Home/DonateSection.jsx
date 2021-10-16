import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image';

import DonationOption from './DonationOption';

import '../../styles/components/Home/DonateSection.scss';

const donationOptions = [
  {
    id: '1',
    title: 'Afiliate',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id varius ut sit a ipsum nam et ut.',
    urlImg: 'imageDonation01',
    textBotton: 'Inscribete',
    link: '/'
  },
  {
    id: '2',
    title: 'Dona',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id varius ut sit a ipsum nam et ut.',
    urlImg: 'imageDonation02',
    textBotton: 'Inscribete',
    link: '/'
  },
  {
    id: '3',
    title: 'Voluntariado',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id varius ut sit a ipsum nam et ut.',
    urlImg: 'imageDonation03',
    textBotton: 'Inscribete',
    link: '/'
  },
  {
    id: '4',
    title: 'Ideas verdes',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id varius ut sit a ipsum nam et ut.',
    urlImg: 'imageDonation04',
    textBotton: 'Inscribete',
    link: '/'
  }
]

export default function DonateSection() {

  const { donationImgs: { images } } = useStaticQuery(graphql`
    query Images {
      donationImgs: allFile(filter: {absolutePath: {regex: "/images/Donation/"}}) {
        images: nodes {
          name
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
      }
    }
  `)


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
          <Link target='_blank' to='/' className='button button--orange'>Realiza una donación</Link>
        </div>

      </div>

      <div className='c-donate__options'>

        <h3>¿Qué puedes hacer para ayudarnos?</h3>

        <div className='donate__options'>
          {
            donationOptions.map((option) => {
              const image = images.find(image => image.name === option.urlImg)

              return (
                <DonationOption
                  img={image}
                  key={option.id}
                  title={option.title}
                  paragraph={option.paragraph}
                  textBotton={option.textBotton}
                  link={option.link} />
              )
            })
          }
        </div>
      </div>

    </section>
  )
}