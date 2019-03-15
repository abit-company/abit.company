const path = require(`path`);

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `abitcomapany`,
        short_name: `abitcomapany`,
        start_url: `/`,
        background_color: `#0c35fb`,
        theme_color: `#0c35fb`,
        display: `minimal-ui`,
        icon: `src/images/abitcompany-logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
