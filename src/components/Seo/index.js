import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({
  lang = 'CZ-cs',
  customMeta = [],
  customTitle = '',
  customUrl = '',
  customDescription = '',
  customOgImage = '',
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            ogImage
          }
        }
      }
    `
  )

  const { title, siteUrl, description, ogImage } = site.siteMetadata

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={customTitle || title}
      titleTemplate={`metrofarm.cz | ${customTitle || title} | ${customDescription || description}`}
      meta={[
        {
          property: `og:title`,
          content: customTitle || title,
         
        },
        {
          property: `og:description`,
          content: customDescription || description,
        },
        {
          property: `description`,
          content: customDescription || description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: customUrl || siteUrl,
        },
        {
          property: `og:image`,
          content: `${siteUrl}${customOgImage || ogImage}`,
        },
        {
          property: `keywords`,
          content: description,
        },
      ].concat(customMeta)}
    />
  )
}

export default Seo
