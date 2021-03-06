module.exports = {
  siteMetadata: {
    siteUrl: "https://camaraverde.netlify.app",
    title: "Cámara Verde Amazorinoquía",
    description:
      "La fundación Cámara Verde de Amazorinoquía, promueve mecanismos para aumentar la capacidad de conversación, protección y gestión eficaz en relación con el cambio climático en la Amazorinoquía ",
    author: "@CamaraVerde",
    image: "/images/donateBackground.png",
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
        name: "static-assets",
        path: "./static/assets",
      },
      __key: "static-assets",
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
        name: "noticias",
        path: "./content/noticias",
      },
      __key: "noticias",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "experiencias",
        path: "./content/experiencias",
      },
      __key: "experiencias",
    },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Nunito", "Raleway:700,900"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "React go",
        short_name: "Reactgo",
        start_url: "/",
        display: "standalone",
        icon: "src/images/camaraverde.png",
      },
    },
  ],
};
