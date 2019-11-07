import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostMetaData from "../components/postMetaData"
import { PAGE_MAX_WIDTH } from "../utils/constants"

const MAX_WIDTH = "800px"


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    // const { previous, next } = this.props.pageContext

    const { title } = post.frontmatter
    const { date } = post.frontmatter
    const { author } = post.frontmatter
    const { altText } = post.frontmatter
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
          <ArticleHead className=''>
            <Title className=''>{post.frontmatter.title}</Title>
            <div className="row">
              <PostMetaData readingTime={readingTime} date={date} author={author} className='col-12 mx-auto'/>
            </div>
          </ArticleHead>
          {featuredImage && <FeaturedImage sizes={image} alt={altText || `featured image for ${title}`}/>}
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
  max-width: ${PAGE_MAX_WIDTH};
  
`

const ArticleHead = styled.div`
  text-align: center;
  margin-bottom: 10px;
`

const FeaturedImage = styled(Img)`
  @media (min-width: 570px) {
    margin: 5%
  }`

const ArticleText = styled.section`
  max-width: ${MAX_WIDTH} ;
  margin: 20px auto;
  font-size: 1.25em;
  font-family: 'Lato', sans-serif;
  
  @media (max-width: 570px) {
    font-size: 1.2em;
    margin: auto 5px
  }
`

const Title = styled.h1`
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  max-width: 700px;
  margin: 10px auto;
  margin-bottom: 5px;
  line-height: 64px;
  
  @media (max-width: 570px) {
    font-size: 30px;
    line-height: 40px;
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
        altText
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
