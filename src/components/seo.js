import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"




function Seo({ description, title, children }) {
  // const { site } = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //           description
  //           author
  //         }
  //       }
  //     }
  //   `
  // )

  const seoDataQuery = graphql`
    query {
      allSanitySeo {
        nodes {
          id
          author
          description
          title
        }
      }
    }
  `
  const seoData = useStaticQuery(seoDataQuery)
  const data = seoData.allSanitySeo.nodes[0]

  // const metaDescription = description || site.siteMetadata.description
  // const defaultTitle = site.siteMetadata?.title

  const metaDescription = data.description
  const defaultTitle = data.title
  const author = data.author

  return (
    <>
      {/* <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} /> */}
      <title>{title ? title : defaultTitle}</title>
      <meta
        name="description"
        content={description ? description : metaDescription}
      />
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={defaultTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  )
}

export default Seo
