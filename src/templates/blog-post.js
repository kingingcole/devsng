import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import PostMetaData from "../components/postMetaData"
import { PAGE_MAX_WIDTH } from "../utils/constants"

const MAX_WIDTH = "800px"


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    const { title } = post.frontmatter
    const { date } = post.frontmatter
    const { author } = post.frontmatter
    const { description } = post.frontmatter
    const readingTime = post.fields.readingTime.text
    const { featuredImage } = post.frontmatter
    // const image = featuredImage.childImageSharp.fluid

    let image
    if (featuredImage) {
      image = post.frontmatter.featuredImage.childImageSharp.fluid
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={title}
          description={description || post.excerpt}
        />
        <ArticleWrapper>
          <ArticleHead>
            <Title>{post.frontmatter.title}</Title>
          </ArticleHead>
          {featuredImage && <FeaturedImage sizes={image}/>}
          <div className="text-left" style={{ maxWidth: MAX_WIDTH, margin: "auto" }}>
            <PostMetaData readingTime={readingTime} date={date} author={author} center={true}/>
          </div>
          <ArticleText dangerouslySetInnerHTML={{ __html: post.html }}/>
        </ArticleWrapper>
      </Layout>
    )
  }
}

export default BlogPostTemplate

const ArticleWrapper = styled.article`
  padding: 20px 10px;
  margin: auto;
  max-width: ${PAGE_MAX_WIDTH}
`

const ArticleHead = styled.section`
  text-align: center;
  margin-bottom: 30px;
`

const FeaturedImage = styled(Img)`
  margin: 20px
`
const ArticleText = styled.section`
  max-width: ${MAX_WIDTH};
  margin: 20px auto;
  font-size: 1em
`

const Title = styled.h1`
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  max-width: 700px;
  margin: auto;
  
  @media (max-width: 570px) {
    font-size: 30px;
  }
`


export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
        title
        date(fromNow: true)
        description
        author
        featuredImage {
          childImageSharp {
            fluid(quality: 90, maxWidth: 3060) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
