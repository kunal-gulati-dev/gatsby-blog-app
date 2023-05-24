import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import heroBlog from "../images/hero-blog-img.png"
import img1 from "../images/img_1.png"
import img2 from "../images/img_2.png"
import img3 from "../images/img_3.png"
import img4 from "../images/img_4.png"
import img5 from "../images/img_5.png"
import img6 from "../images/img_6.png"
import img7 from "../images/img_7.png"
import img8 from "../images/img_8.png"
import img9 from "../images/img_9.png"
import img10 from "../images/img_10.png"
import img11 from "../images/img_11.png"
import img12 from "../images/img_12.png"
import { useStaticQuery, graphql } from "gatsby"


// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`



const IndexPage = () => {

  const query = graphql`
    query {
      allSanityBlog {
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
                  <Link className="" to={`/blog/${blog.slug.current}`}>
                    <div className="blog-item" key={index}>
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

              {/* <div className="blog-item">
                <div className="blog-item-image-container">
                  <img src={img1} alt="" className="blog-item-image" />
                </div>
                <h4 className="blog-item-heading">
                  Here are some things you should know regarding how we work
                </h4>
              </div>

              <div className="blog-item">
                <div className="blog-item-image-container">
                  <img src={img2} alt="" className="blog-item-image" />
                </div>
                <h4 className="blog-item-heading">
                  Granny gives everyone the finger, and other tips from OFFF
                  Barcelona
                </h4>
              </div>

              <div className="blog-item">
                <div className="blog-item-image-container">
                  <img src={img3} alt="" className="blog-item-image" />
                </div>
                <h4 className="blog-item-heading">
                  Hello world, or, in other words, why this blog exists
                </h4>
              </div>

              <div className="blog-item">
                <div className="blog-item-image-container">
                  <img src={img4} alt="" className="blog-item-image" />
                </div>
                <h4 className="blog-item-heading">
                  Here are some things you should know regarding how we work
                </h4>
              </div>

              <div className="blog-item">
                <div className="blog-item-image-container">
                  <img src={img5} alt="" className="blog-item-image" />
                </div>
                <h4 className="blog-item-heading">
                  Connecting artificial intelligence with digital product design
                </h4>
              </div>

              <div className="blog-item">
                <div className="blog-item-image-container">
                  <img src={img6} alt="" className="blog-item-image" />
                </div>
                <h4 className="blog-item-heading">
                  It’s all about finding the perfect balance
                </h4>
              </div>

              <div className="blog-item">
                <div className="blog-item-image-container">
                  <img src={img7} alt="" className="blog-item-image" />
                </div>
                <h4 className="blog-item-heading">
                  I believe learning is the most important skill
                </h4>
              </div>

              <div className="blog-item">
                <div className="blog-item-image-container">
                  <img src={img8} alt="" className="blog-item-image" />
                </div>
                <h4 className="blog-item-heading">
                  Clients are part of the team
                </h4>
              </div>

              <div className="blog-item">
                <div className="blog-item-image-container">
                  <img src={img9} alt="" className="blog-item-image" />
                </div>
                <h4 className="blog-item-heading">
                  Clients are part of the team
                </h4>
              </div>

              <div className="blog-item">
                <div className="blog-item-image-container">
                  <img src={img10} alt="" className="blog-item-image" />
                </div>
                <h4 className="blog-item-heading">
                  Here are some things you should know regarding how we work
                </h4>
              </div>

              <div className="blog-item">
                <div className="blog-item-image-container">
                  <img src={img11} alt="" className="blog-item-image" />
                </div>
                <h4 className="blog-item-heading">
                  Connecting artificial intelligence with digital product design
                </h4>
              </div>

              <div className="blog-item">
                <div className="blog-item-image-container">
                  <img src={img12} alt="" className="blog-item-image" />
                </div>
                <h4 className="blog-item-heading">
                  How modern remote working tools get along with Old School
                  Cowboy's methods
                </h4>
              </div> */}
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
