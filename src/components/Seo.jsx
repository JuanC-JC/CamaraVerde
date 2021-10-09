import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { getSrc } from 'gatsby-plugin-image'

export default function Seo({ lang, description, image, title, isPost, meta }) {
  const { site: { siteMetadata } } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            siteUrl
          }
        }
      }
    `
  );

  const seoDescription = description || siteMetadata.description;
  const seoImage = image ? `${siteMetadata.siteUrl}${getSrc(image) || image}` : `${siteMetadata.siteUrl}${siteMetadata.image}`
  const seoTitle = isPost ? `${title} | ${'Cámara Verde de la Amazorinoquía'}` : siteMetadata.title
  const seoType = isPost ? `article` : `website`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seoTitle}
      // titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: seoDescription,
        },
        {
          property: `og:title`,
          content: seoTitle
        },
        {
          property: `og:description`,
          content: seoDescription,
        },
        {
          property: `og:type`,
          content: seoType
        },
        {
          property: `og:image`,
          content: seoImage
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: seoTitle
        },
        {
          name: `twitter:description`,
          content: seoDescription,
        },
        {
          name: `twitter:image`,
          content: seoImage
        },
      ].concat(meta)}
    />
  );
}

Seo.defaultProps = {
  lang: `es`,
  meta: [],
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  isPost: PropTypes.bool,
  image: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
};
