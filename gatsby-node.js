/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")



// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/BlogDetailTemplate/",
//     component: require.resolve("./src/templates/BlogDetailTemplate.js"),
//     context: {},
//     defer: true,
//   })
// }


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

  console.log('data aya backed se ===', result.data.allSanityBlog.nodes)

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
