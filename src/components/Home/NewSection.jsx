import React from 'react';
import { Link } from 'gatsby';
import NewCard from './NewCard';
import { useStaticQuery, graphql } from 'gatsby';
import '../../styles/components/Home/NewSection.scss';


export default function NewSection() {

  const { files: { data } } = useStaticQuery(graphql`
    query getNews {
      files: allMdx(
        filter: {fileAbsolutePath: {regex: "/noticias/"}}
        limit: 4
      ) {
        data: nodes {
          id
          data: frontmatter {
            convocatoria
            date(formatString: "MMMM DD, YYYY")
            title
            content
            image {
              childImageSharp {
                gatsbyImageData(width: 900)
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section className='c-new'>

      <h2>Noticias</h2>
      <div className='news'>
        {
          data.map(report =>
            <NewCard
              key={report.id}
              id={report.id}
              img={report.data.image}
              date={report.data.date}
              title={report.data.title}
              text={report.data.content}
              notification={report.convocatoria}
            />
          )
        }
      </div>
      <Link target='_blank' to='http://facebook.com' className='button button--orange'>Ver más noticias</Link>

    </section>
  )
}
