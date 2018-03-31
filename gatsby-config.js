module.exports = {
  siteMetadata: {
    title: "abit company"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-netlify-cms",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/_collections/team`,
        name: "team"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/_collections/services`,
        name: "services"
      }
    },
    "gatsby-transformer-remark"
  ],
  pathPrefix: "/assets"
};
