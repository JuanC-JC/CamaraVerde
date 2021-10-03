const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const newTemplate = path.resolve(`src/templates/NewTemplate.jsx`);
  const experienceTemplate = path.resolve(
    `src/templates/ExperienceTemplate.jsx`
  );
  const newsTemplate = path.resolve(`src/templates/NewsTemplate.jsx`);

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
            post {
              link
              name
            }
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
        filter: { fileAbsolutePath: { regex: "/experiencias/" } }
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
      path: `noticia/${element.id}`,
      component: newTemplate,
      context: element,
    });
  });

  const postsPerPage = 2;
  const numPages = Math.ceil(newsFiles.nodos.length / postsPerPage);

  for (let i = 0; i < numPages; i++) {
    createPage({
      path: `noticias/${i + 1}`,
      component: newsTemplate,
      context: newsFiles.nodos.slice(i * postsPerPage, (i + 1) * postsPerPage),
    });
  }

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
