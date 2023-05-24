module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "l8nb5yul",
        dataset: "production",
        token:
          "skVjPhi2COCEmvPB15RO63cjvaTRPkopSwWHjmdBjAsoD7agxrVRCGBCpIrOyJ1hEgUvrSy4a0bUymKsJAO1qKpH33DCA7TceZZA1YAA7t7auBhzwMigWUm8I9IVm3c4ujh9W8qVRohVYh8eEpbrmYqCvZjDjrk0ZEQpNUKYBfbTgKYaftIP",
        endpoint: `https://l8nb5yul.api.sanity.io/v1/graphql/production/default`,
      },
    },
  ],
}
