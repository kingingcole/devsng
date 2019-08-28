import React from "react"
import { Link, graphql } from "gatsby"
import ArticleHeader from '../components/articleHeader'
import PostCard from '../components/postCard'
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <ArticleHeader/>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const description = node.frontmatter.description || node.excerpt
          const {slug} = node.fields
          const {date} = node.frontmatter

          return (
            <PostCard key={slug} description={description} title={title} date={date}/>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark (sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {published: {ne: false}}})  {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
