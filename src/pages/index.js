import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"


// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`



const IndexPage = () => {

  const query = graphql`
    query {
      allSanityBlog(sort: { publishedAt: DESC }) {
        nodes {
          id
          title
          subtitle
          slug {
            current
          }
          mainImage {
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }
  `

  const data = useStaticQuery(query)

  const blogs = data.allSanityBlog.nodes
  return (
    <Layout>
      <div className="main">
        <section className="hero-section">
          <Link to={`/blog/${blogs[0].slug.current}`} >
            <div className="main-blog-image-container">
              <img
                src={
                  blogs[0].mainImage.asset.gatsbyImageData.images.fallback.src
                }
                alt=""
                className="main-blog-image"
              />
            </div>
            <h2 className="main-blog-heading">{blogs[0].title}</h2>
            <p className="main-blog-subheading">{blogs[0].subtitle}</p>
          </Link>
        </section>

        <section className="all-blog-section">
          <div className="sub-container">
            <h2 className="all-blog-heading">All articles</h2>

            <div className="all-blog-items">
              {blogs.slice(1, blogs.length).map((blog, index) => {
                return (
                  <Link
                    className=""
                    to={`/blog/${blog.slug.current}`}
                    key={index}
                  >
                    <div className="blog-item">
                      <div className="blog-item-image-container">
                        <img
                          src={
                            blog.mainImage.asset.gatsbyImageData.images.fallback
                              .src
                          }
                          alt=""
                          className="blog-item-image"
                        />
                      </div>
                      <h4 className="blog-item-heading">{blog.title}</h4>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
