import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import PostMetaData from "../components/postMetaData"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    const { title } = post.frontmatter
    const { date } = post.frontmatter
    const { description } = post.frontmatter
    const readingTime = post.fields.readingTime.text
    const {featuredImage} = post.frontmatter
    // const image = featuredImage.childImageSharp.fluid

    let image;
    if (featuredImage){
      image = post.frontmatter.featuredImage.childImageSharp.fluid
    }

    console.log(image)
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={title}
          description={description || post.excerpt}
        />
        <ArticleWrapper>
          <ArticleHead>
            <Title>{post.frontmatter.title}</Title>
            <PostMetaData readingTime={readingTime} date={date}/>
          </ArticleHead>
          {featuredImage && <FeaturedImage sizes={image}/>}
          <ArticleText dangerouslySetInnerHTML={{ __html: post.html }}/>
          {/*<section dangerouslySetInnerHTML={{ __html: post.html }}/>*/}
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />


          <nav>
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </ArticleWrapper>
      </Layout>
    )
  }
}

export default BlogPostTemplate

const ArticleWrapper = styled.article`
  padding: 20px 10px;
  max-width: 1100px;
  margin: auto
`

const ArticleHead = styled.section`
  text-align: center;
  margin-bottom: 30px;
`

const FeaturedImage = styled(Img)`
  margin: 20px
`
const ArticleText = styled.section`
  max-width: 700px;
  margin: 20px auto;
  font-size: 1em
`

const Title = styled.h1`
  font-family: Fira Sans;
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
