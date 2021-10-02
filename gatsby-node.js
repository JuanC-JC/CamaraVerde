const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const newsTemplate = path.resolve(`src/templates/newsTemplate.jsx`);

  const newsQuery = await graphql(`
    query getNews {
      files: allMdx(
        filter: { fileAbsolutePath: { regex: "/noticias/" } }
        limit: 4
        sort: { fields: frontmatter___date }
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
  `);

  // const experienceQuery = await graphql(`

  // `)

  if (newsQuery.errors) {
    throw newsQuery.errors;
  }

  const {
    data: { files },
  } = newsQuery;

  files.nodos.forEach((element) => {
    createPage({
      path: `noticias/${element.id}`,
      component: newsTemplate,
      context: element,
    });
  });
};
