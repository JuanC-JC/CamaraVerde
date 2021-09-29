module.exports = {
  siteMetadata: {
    siteUrl: "https://camaraverde.netlify.app/",
    title: "Camara Verde Amazorinoquía",
    description:
      "La fundacion camara verde de amazorinoquia, promueve mecanismos para aumentar la capacidad de conversacion, proteccion y gestion eficaz en relacion con el cambio climático en la Amazorinoquía ",
    author: "Camara Verde",
    image: "/static/images/donateBackground.png",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.md`, `.mdx`],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "./content/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Nunito", "Raleway:700,900"],
      },
    },
  ],
};
