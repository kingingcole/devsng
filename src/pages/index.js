import React from "react"
import { Link, graphql } from "gatsby"
import ArticleHeader from '../components/articleHeader'
import PostCard from '../components/postCard'
import Img from "gatsby-image"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const PostsWrapper = styled.div`
  max-width: 1100px;
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
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            const description = node.frontmatter.description || node.excerpt
            const {slug} = node.fields
            const {date} = node.frontmatter
            const readingTime = node.fields.readingTime.text;

            return (
              <PostCard key={slug} description={description} title={title} date={date} slug={slug} readingTime={readingTime}/>
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
    allMarkdownRemark (sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {published: {ne: false}}})  {
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
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
