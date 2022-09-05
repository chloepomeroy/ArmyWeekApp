module.exports = {
  siteMetadata: {
    title: `AGM // GGA`,
    description: `Army Governance Management System // Systeme de gestion de la gouvernance de l'armée`,
    author: `@DAS`,
    siteUrl: `https://armyweek.azurewebsites.net/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Army Governance Management // Gestion de la gouvernance de l'armée`,
        short_name: `AGM // GGA`,
        start_url: `/`,
        background_color: `green`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `green`,
        display: `standalone`,
        icon: `./src/images/icon.png`,
        icons: [
          {
            src: `./src/images/agm-icon-512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
}
