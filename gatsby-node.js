const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  //Import templates
  const newTemplate = path.resolve(`src/templates/NewTemplate.jsx`);
  const newsTemplate = path.resolve(`src/templates/NewsTemplate.jsx`);

  const experienceTemplate = path.resolve(
    `src/templates/ExperienceTemplate.jsx`
  );
  const experiencesTemplate = path.resolve(
    `src/templates/ExperiencesTemplate.jsx`
  );

  //graphql Queries
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
            galleryParners {
              childImageSharp {
                gatsbyImageData(width: 200)
              }
            }
            dateRange {
              init(formatString: "MMMM DD, YYYY")
              finish
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

  //Desctructuring data
  let {
    data: { newsFiles },
  } = newsQuery;

  newsFiles.nodos = [
    ...newsFiles.nodos,
    ...newsFiles.nodos,
    ...newsFiles.nodos,
    ...newsFiles.nodos,
    ...newsFiles.nodos,
    ...newsFiles.nodos,
    ...newsFiles.nodos,
    ...newsFiles.nodos,
    ...newsFiles.nodos,
    ...newsFiles.nodos,
    ...newsFiles.nodos,
  ];

  const {
    data: { experienceFiles },
  } = experienceQuery;

  //Create individual pages view

  //> noticia/{idNoticia}
  newsFiles.nodos.forEach((element) => {
    createPage({
      path: `noticia/${element.id}`,
      component: newTemplate,
      context: element,
    });
  });

  //> experiencia/{idExperiencia}
  experienceFiles.nodos.forEach((element) => {
    createPage({
      path: `experiencia/${element.id}`,
      component: experienceTemplate,
      context: element,
    });
  });

  const postsPerPage = 6;
  const numPagesNews = Math.ceil(newsFiles.nodos.length / postsPerPage);
  const numPagesExperiences = Math.ceil(
    experienceFiles.nodos.length / postsPerPage
  );

  for (let i = 0; i < numPagesNews; i++) {
    createPage({
      path: `noticias/${i + 1}`,
      component: newsTemplate,
      context: {
        files: newsFiles.nodos.slice(i * postsPerPage, (i + 1) * postsPerPage),
        pages: numPagesNews,
        indexPage: i + 1,
      },
    });
  }

  for (let i = 0; i < numPagesExperiences; i++) {
    createPage({
      path: `experiencias/${i + 1}`,
      component: experiencesTemplate,
      context: {
        files: experienceFiles.nodos.slice(
          i * postsPerPage,
          (i + 1) * postsPerPage
        ),
        pages: numPagesExperiences,
        indexPage: i + 1,
      },
    });
  }
};
