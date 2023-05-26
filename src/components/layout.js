/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer/Footer"
import "./layout.css"
import { Helmet } from "react-helmet"



const Layout = ({ children, metaTitle, metaDescription }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  console.log(metaTitle, metaDescription)

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta
          name="description"
          content={metaDescription}
          data-gatsby-head="true"
        ></meta>
      </Helmet>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
