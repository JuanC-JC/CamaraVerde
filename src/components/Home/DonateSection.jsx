import React from 'react';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image';

import DonationOption from './DonationOption';

import '../../styles/components/Home/DonateSection.scss';

const donationOptions = [
  {
    id: '1',
    title: 'Empresas Verdes',
    paragraph: 'Te orientamos, asesoramos y convertimos tu proceso empresarial en un modelo con propósito que se adapte a las oportunidades del nuevo mundo sostenible. ',
    urlImg: 'imageDonation01',
    textBotton: 'Inscribete',
    link: '/'
  },
  {
    id: '2',
    title: 'Dona',
    paragraph: 'Se parte de este gran proyecto, ayúdanos en la protección y conservación de la flora, fauna y comunidades de la Amazorinoquia colombiana.',
    urlImg: 'imageDonation02',
    textBotton: 'Dona',
    link: '/'
  },
  {
    id: '3',
    title: 'Voluntariado',
    paragraph: 'No importa si eres o no profesional, o si tienes experiencia, lo que importa es tu deseo de ACTUAR, únete a nuestro equipo.',
    urlImg: 'imageDonation03',
    textBotton: 'Inscribete',
    link: '/'
  },
  {
    id: '4',
    title: 'Ideas verdes',
    paragraph: 'Creemos y apoyamos las ideas y negocios verdes que transforman las comunidades y sus entornos, postula tu proceso para ayuda técnica o financiera.',
    urlImg: 'imageDonation04',
    textBotton: 'Postulate',
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
          <h2>Es el momento de actuar apoyanos</h2>
          <p>Estamos en la crisis ambiental y social más importante que ha enfrentado la humanidad en su historia, estamos cerca al punto de no retorno.</p>
          <p>Tu apoyo es importante para tu futuro, haz click en <b>QUIERO ACTUAR</b>, elige tu rol y déjanos tus datos, pronto nuestro equipo te contactará.</p>
          <Link target='_blank' to='/' className='button button--orange'>Quiero actuar</Link>
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