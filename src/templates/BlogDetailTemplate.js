import * as React from 'react'
import Layout from "../components/layout"
import facebookIcon from "../images/facebook-icon.png"
import twitterIcon from "../images/twitter-icon.png"
import eyesImage from "../images/eyes_image.png"
import { Link } from "gatsby"

import { useStaticQuery, graphql } from "gatsby"
import imageUrlBuilder from "@sanity/image-url"
import BlockContent from "@sanity/block-content-to-react"
import {format} from "date-fns";



const BlogDetail = ({ pageContext }) => {

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

  const {
    readtime,
    title,
    subtitle,
    author,
    aboutAuthor,
    publishedAt,
    mainImage,
    authorImage,
    content,
    slug,
    _rawContent,
    metatitle,
    metadescription
  } = pageContext.blog

  const data = useStaticQuery(query)

  const blogs = data.allSanityBlog.nodes

  

  const relatedBlogs = blogs.filter(blog => {
    return blog.slug.current !== slug.current
  })


  const builder = imageUrlBuilder({
    projectId: "l8nb5yul",
    dataset: "production",
  })

  const serializers = {
    types: {
      image: ({ node }) => {
        const imageUrl = builder.image(node.asset).url()
        return <img src={imageUrl} alt={node.alt} />
      },
    },
  }

  console.log("meta title ==", metatitle)
  console.log("meta description ==", metadescription)

  return (
    <Layout metaTitle={metatitle} metaDescription={metadescription}>
      <div className="blog-detail-section">
        <div className="blog-container">
          <h2 className="bl-heading">{title}</h2>
          <p className="bl-sub-heading">{subtitle}</p>
          <div className="bl-image-container">
            <img
              src={mainImage.asset.gatsbyImageData.images.fallback.src}
              alt=""
              className="blog-detail-image"
            />
          </div>
        </div>
        <div className="blog-detail-container">
          <div className="blog-date">
            <div className="date-container">
              <div className="image-date">
                <div className="author-image-container">
                  <img
                    src={authorImage.asset.gatsbyImageData.images.fallback.src}
                    alt=""
                    className="author-date-image"
                  />
                </div>
                <div className="date-detail">
                  <p className="author-name">{author}</p>
                  <p className="date-published">
                    {format(new Date(publishedAt), "MMM dd yyyy")} ·
                    <span> {readtime}</span>
                  </p>
                </div>
              </div>
              <div className="author-social-icons">
                <a href="#" className="social-icon-button">
                  <img
                    src={facebookIcon}
                    alt=""
                    className="author-social-icon"
                  />
                </a>
                <a href="#" className="social-icon-button">
                  <img
                    src={twitterIcon}
                    alt=""
                    className="author-social-icon"
                  />
                </a>
              </div>
            </div>
            <div className="blog-description-container">
              <BlockContent blocks={_rawContent} serializers={serializers} />

              <div className="social-icons-container">
                <button className="social-button">
                  <img src={facebookIcon} alt="" />
                  Share on Facebook
                </button>
                <button className="social-button">
                  <img src={twitterIcon} alt="" />
                  Share on Twitter
                </button>
              </div>
              <p className="tags blog-detail-para">
                tags: <span>product design</span>, <span>culture</span>
              </p>
              <div className="about-author">
                <div className="author-image">
                  <img
                    src={authorImage.asset.gatsbyImageData.images.fallback.src}
                    alt=""
                    className="author-date-image"
                  />
                </div>
                <p className="author-description blog-detail-para">
                  {aboutAuthor}
                </p>
              </div>
            </div>
          </div>
          <img src={eyesImage} alt="" className="ellipse" />
        </div>

        {/* related next blog */}
        <div className="next-blog-section">
          <h2 className="next-read-heading">What to read next</h2>
          <div className="related-blog-items">
            {relatedBlogs.slice(0, 6).map((blog, index) => {
              return (
                <Link
                  className=""
                  to={`/blog/${blog.slug.current}`}
                  key={blog.id}
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

        {/* newsletter section */}

        <div className="newsletter-section">
          <h3>Sign up for the newsletter</h3>
          <p>
            If you want relevant updates occasionally, sign up for the private
            newsletter. Your email is never shared.
          </p>
          <div className="email-signup">
            <input
              type="text"
              placeholder="Enter your email..."
              className="email-input"
            />
            <button className="signup-button">SIGN UP</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}


// export const Head = () => <Seo title={metatitle} description={metadescription} />


export default BlogDetail