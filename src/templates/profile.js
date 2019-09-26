import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProfilePostsSection from '../components/profilePostsSection'
import PostCard from "../components/postCard"
import { rhythm, scale } from "../utils/typography"
import PostMetaData from "../components/postMetaData"
import { COLORS, PAGE_MAX_WIDTH } from "../utils/constants"


class ProfileTemplate extends React.Component {
  render() {
    const author = this.props.data.markdownRemark
    const posts = this.props.data.allMarkdownRemark.edges

    const siteTitle = this.props.data.site.siteMetadata.title
    const { slug } = this.props.pageContext

    const { name } = author.frontmatter
    return (
      <Layout location={name} title={siteTitle}>
        <SEO
          title={name}
          description={`Profile of ${name} | DevsNg`}
        />
        <ProfilePostsSection posts={posts} siteTitle={siteTitle} name={name}/>
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
        slug
      }
      frontmatter {
        name
      }
    }
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "post"}, author: {eq: "emeruche-cole"}}}, , sort: {order: DESC, fields: frontmatter___date}) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            description
            author
            date(fromNow: true)
            featuredImage {
              childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
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
