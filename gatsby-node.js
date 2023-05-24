const path = require("path")

exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions

  const result = await graphql(`
    query {
      allSanityBlog {
        nodes {
          id
          readtime
          subtitle
          title
          slug {
            current
          }
          mainImage {
            asset {
              gatsbyImageData
            }
          }
          author
          authorImage {
            asset {
              gatsbyImageData
            }
          }
          aboutAuthor
          publishedAt
          content {
            children {
              text
            }
          }
          _rawContent
        }
      }
    }
  `)


  // Handle errors if any
  if (result.errors) {
    throw result.errors
  }

  // Create pages for each blog post
  // const blogPosts = result.data.allSanityBlog.edges
  result.data.allSanityBlog.nodes.forEach(
    (element, index) => {
      createPage({
        path: `/blog/${element.slug.current}`,
        component: path.resolve("./src/templates/BlogDetailTemplate.js"),
        context: {
          blog: element
        }
      })
    }
  )
}
