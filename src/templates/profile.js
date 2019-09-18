import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import PostMetaData from "../components/postMetaData"
import { COLORS } from "../utils/constants"


class ProfileTemplate extends React.Component {
  render() {
    const author = this.props.data.markdownRemark
    const posts = this.props.data.allMarkdownRemark.edges

    const siteTitle = this.props.data.site.siteMetadata.title
    const { slug } = this.props.pageContext

    const { name } = author.frontmatter
    console.log(this.props.data)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={name}
          description={`Profile of ${name} | DevsNg`}
        />
        {posts.map(({node}) => {
          return(
            <p key={node.id}>{node.frontmatter.title}</p>
          )
        })}
      </Layout>
    )
  }
}

export default ProfileTemplate



export const userQuery = graphql`
  query UserProfileBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        readingTime {
          text
        }
      }
      frontmatter {
        name
      }
    }
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "post"}, author: {eq: "emeruche-cole"}}}) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            author
            date
          }
          fields {
            slug
            readingTime {
              text
            }
          }
        }
      }
    }
  }
    
`
