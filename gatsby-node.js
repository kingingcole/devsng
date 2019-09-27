const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const profilePage = path.resolve(`./src/templates/profile.js`)

  return graphql(
    `
      {
         allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 1000) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            type
            published
          }
        }
      }
    }
      }
    `,
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges.filter(post => post.node.frontmatter.type === "post" && post.node.frontmatter.published === true)
    const profiles = result.data.allMarkdownRemark.edges.filter(profile => profile.node.frontmatter.type === "profile")

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      let { slug } = post.node.fields

      let path = `post${slug}`

      createPage({
        path,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    });

    profiles.forEach((profile, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      let { slug } = profile.node.fields

      // slug contains preceeding and proceeding '/' eg '/new-user/'
      // remove the slashes
      let authorIdentifier = slug.slice(1, slug.length-1)

      let path = `profile${slug}`

      createPage({
        path,
        component: profilePage,
        context: {
          slug: profile.node.fields.slug,
          previous,
          next,
          authorIdentifier
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField(
      {
        name: `slug`,
        node,
        value,
      },
    )
  }
}
