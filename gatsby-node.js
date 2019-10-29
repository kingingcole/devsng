const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const lodash = require("lodash")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  //templates
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const profilePage = path.resolve(`./src/templates/profile.js`)
  const tagPage = path.resolve(`./src/templates/tags.js`)

  return graphql(
    `
      {
        postsRemark: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 1000) {
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
        tagsGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `,
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // data from query
    const posts = result.data.postsRemark.edges.filter(post => post.node.frontmatter.type === "post" && post.node.frontmatter.published === true) //for posts
    const profiles = result.data.postsRemark.edges.filter(profile => profile.node.frontmatter.type === "profile") //for profiles
    const tags = result.data.tagsGroup.group //for tags

    // Create blog posts pages.
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
    })


    //create pages for each author profile

    profiles.forEach((profile, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      let { slug } = profile.node.fields

      // slug contains preceeding and proceeding '/' eg '/new-user/'
      // remove the slashes
      let authorIdentifier = slug.slice(1, slug.length - 1)

      let path = `profile${slug}`

      createPage({
        path,
        component: profilePage,
        context: {
          slug: profile.node.fields.slug,
          previous,
          next,
          authorIdentifier,
        },
      })
    })

    // Create tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tags/${lodash.kebabCase(tag.fieldValue)}/`,
        component: tagPage,
        context: {
          tag: tag.fieldValue,
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
        value: value.toLowerCase(),
      },
    )
  }
}
