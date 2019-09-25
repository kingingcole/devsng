import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
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

    const PostsWrapper = styled.div`
      max-width: ${PAGE_MAX_WIDTH};
      margin: auto;
      padding: 30px 10px
    `

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={name}
          description={`Profile of ${name} | DevsNg`}
        />
        <PostsWrapper className={`container`}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            const description = node.frontmatter.description || node.excerpt
            const { slug } = node.fields
            let url = `post${slug}`
            const { date } = node.frontmatter
            const { author } = node.frontmatter
            const readingTime = node.fields.readingTime.text
            const { featuredImage } = node.frontmatter

            let image
            if (featuredImage) {
              image = node.frontmatter.featuredImage.childImageSharp.fluid
            }

            return (
              <PostCard
                hideAuthorDetails={true}
                key={slug}
                description={description}
                title={title}
                date={date}
                url={url}
                readingTime={readingTime}
                image={image}
                author={author}
              />
            )
          })}
        </PostsWrapper>
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
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "post"}, author: {eq: "emeruche-cole"}}}) {
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
