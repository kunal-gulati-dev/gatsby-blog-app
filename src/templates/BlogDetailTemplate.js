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

  return (
    <Layout>
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
                    {format(new Date(publishedAt), "MMM dd yyyy")} ·<span> {readtime}</span>
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
              {/* <p className="blog-detail-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
                velit tempus erat egestas efficitur. In hac habitasse platea
                dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean
                pharetra quis lacus at viverra.
                <br />
                <br />
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In
                eu dui molestie, molestie lectus eu, semper lectus.
              </p>
              <h4 className="detail-heading">Next on the pipeline</h4>
              <p className="blog-detail-para">
                Duis eu velit tempus erat egestas efficitur. In hac habitasse
                platea dictumst. Fusce a nunc eget ligula suscipit finibus.
                Aenean pharetra quis lacus at viverra. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos.
                <br />
                <br />
                Morbi efficitur auctor metus, id mollis lorem pellentesque id.
                Nullam posuere maximus dui et fringilla.
              </p>
              <div className="blog-detail-image-container">
                <img
                  src={blogDetailImage}
                  alt=""
                  className="blog-detail-image"
                />
              </div>
              <p className="blog-detail-para">
                Aenean pharetra quis lacus at viverra. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Aliquam quis posuere ligula.
                <br />
                <br />
                In eu dui molestie, molestie lectus eu, semper lectus. Proin at
                justo lacinia, auctor nisl et, consequat ante. Donec sit amet
                nisi arcu. Morbi efficitur auctor metus, id mollis lorem
                pellentesque id. Nullam posuere maximus dui et fringilla. Nulla
                non volutpat leo.
              </p>
              <br />
              <br />
              <p className="blog-detail-para">A list looks like this:</p>
              <ul>
                <li>First item in the list </li>
                <li>
                  Second item in the list lorem ipsum dolor sit amet nunc felis
                  dolor lorem ipsum sit amet
                </li>
                <li>Third item in the list</li>
              </ul>
              <p className="blog-detail-para">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Aliquam quis posuere ligula.
              </p>
              <br />
              <br />

              <p className="blog-detail-para">
                Thanks for reading,
                <br />
                Mika
              </p> */}
              {/* <BlockContent blocks={pageContext.blog._rawContent} /> */}
              {/* <ReactMarkdown>{_rawContent}</ReactMarkdown> */}
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
            </div> */}
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

export default BlogDetail