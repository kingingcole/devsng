import React from "react"
import { Link, graphql } from "gatsby"
import ArticleHeader from '../components/articleHeader'
import PostCard from '../components/postCard'
import Img from "gatsby-image"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PAGE_MAX_WIDTH } from "../utils/constants"

const PostsWrapper = styled.div`
  max-width: ${PAGE_MAX_WIDTH};
  margin: auto;
  padding: 30px 10px
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <ArticleHeader/>
        <PostsWrapper className={`container`}>
          {posts.map(({ node }, i) => {
            const title = node.frontmatter.title || node.fields.slug
            const description = node.frontmatter.description || node.excerpt
            const {slug} = node.fields
            let url = `post${slug}`
            const {date} = node.frontmatter
            const {author} = node.frontmatter
            const readingTime = node.fields.readingTime.text;
            const {featuredImage} = node.frontmatter;


            let image;
            if (featuredImage){
              image = node.frontmatter.featuredImage.childImageSharp.fluid
            }

            return (
              <PostCard
                key={i}
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

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" }, published: { eq: true } } }
      sort: { fields: frontmatter___date, order: DESC }
      ){
      edges {
        node {
          excerpt
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            date(fromNow: true)
            title
            description
            author
            featuredImage {
              childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
