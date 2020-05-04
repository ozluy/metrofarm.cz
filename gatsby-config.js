/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `MetroFarm`,
    siteUrl: `http://metrofarm.cz`,
    description: `Komunitní Zahrada`,
    ogImage: `/metrofarm-og-image.png`,
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-resolve-src`,
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     /*
    //      * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
    //      * Example : 'demo.wp-api.org' or 'www.example-site.com'
    //      */
    //     baseUrl: `metrofarmcz.wordpress.com`,
    //     // The protocol. This can be http or https.
    //     protocol: `https`,
    //     // Indicates whether the site is hosted on wordpress.com.
    //     // If false, then the assumption is made that the site is self hosted.
    //     // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
    //     // If your site is hosted on wordpress.org, then set this to false.
    //     hostingWPCOM: true,
    //     // If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
    //     // This feature is untested for sites hosted on WordPress.com
    //     useACF: true,

    //   },
    // },
  ],
}
