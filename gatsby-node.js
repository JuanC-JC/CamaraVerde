const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const newsTemplate = path.resolve(`src/templates/newsTemplate.jsx`);
  const experienceTemplate = path.resolve(
    `src/templates/ExperienceTemplate.jsx`
  );

  const newsQuery = await graphql(`
    query getNews {
      newsFiles: allMdx(filter: { fileAbsolutePath: { regex: "/noticias/" } }) {
        nodos: nodes {
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
  `);

  const experienceQuery = await graphql(`
    query getExperience {
      experienceFiles: allMdx(
        filter: { fileAbsolutePath: { regex: "/experiencia/" } }
      ) {
        nodos: nodes {
          id
          data: frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            content
            team {
              job
              name
            }
            galleryImages {
              childImageSharp {
                gatsbyImageData(width: 900)
              }
            }
          }
        }
      }
    }
  `);

  if (newsQuery.errors) {
    throw newsQuery.errors;
  }

  if (experienceQuery.errors) {
    throw experienceQuery.errors;
  }

  const {
    data: { newsFiles },
  } = newsQuery;

  newsFiles.nodos.forEach((element) => {
    createPage({
      path: `noticias/${element.id}`,
      component: newsTemplate,
      context: element,
    });
  });

  const {
    data: { experienceFiles },
  } = experienceQuery;

  experienceFiles.nodos.forEach((element) => {
    createPage({
      path: `experiencia/${element.id}`,
      component: experienceTemplate,
      context: element,
    });
  });
};
