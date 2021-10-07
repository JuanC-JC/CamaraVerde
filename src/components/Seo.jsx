import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import {getSrc} from 'gatsby-plugin-image'

export default function Seo({ lang, description, image, title, isPost, meta }) {
  const { site : {siteMetadata} } = useStaticQuery(
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

  const metaDescription = description || siteMetadata.description;

  console.log(title)
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={isPost ? `${title} | ${'Camara Verde'}` : siteMetadata.title}
      // titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title || siteMetadata.title,
        },
        {
          property: `og:description`,
          content: description || siteMetadata.description,
        },
        {
          property: `og:type`,
          content: isPost ? `article` : `website`
        },
        {
          property: `og:image`,
          content: image ? `${siteMetadata.siteUrl}${getSrc(image)}` : `${siteMetadata.siteUrl}${siteMetadata.image}`
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
          content: title || siteMetadata.title ,
        },
        {
          name: `twitter:description`,
          content: description || siteMetadata.description,
        },
        {
          name: `twitter:image`,
          content: image ? `${siteMetadata.siteUrl}${getSrc(image)}` : `${siteMetadata.siteUrl}${siteMetadata.image}`
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
  image: PropTypes.object,
};
