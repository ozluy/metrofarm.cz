/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `MetroFarm Komunitní Zahrada`,
    siteUrl: `http://metrofarm.cz`,
    description: `Adopce slepice, Vlastní záhonek, Adopce koz, Adopce ovcí`,
    ogImage: `/metrofarm-og-image.png`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-resolve-src`,
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     baseUrl: `metrofarmcz.wordpress.com`,
    //     protocol: `https`,
    //     hostingWPCOM: true,
    //     useACF: true,
    //   },
    // },
  ],
}
