const path = require('path')

exports.createPages = async({graphql,actions})=>{

  const {createPage} = actions

  const Template = path.resolve(`src/templates/newsTemplate.jsx`)

  const result = await graphql(`
    query getNews {
      files: allMdx(
        filter: {fileAbsolutePath: {regex: "/noticias/"}}) {
        nodos: nodes {
          id
          slug
          data: frontmatter {
            convocatoria
            date
            title
            content
            galleryImages {
              childImageSharp {
                gatsbyImageData(width:980)
              }
            }
          }
        }
      }
    }
  `)

  if(result.errors){
    throw result.errors
  }

  const {data:{files}} = result
  
  files.nodos.forEach(element=>{
    createPage({
      path:`noticias/${element.id}`,
      component:Template,
      context: element,
    })
  })
}