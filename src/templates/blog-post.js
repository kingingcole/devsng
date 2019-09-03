import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import PostMetaData from '../components/postMetaData'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    const {title} = post.frontmatter;
    const {date} = post.frontmatter;
    const {description} = post.frontmatter;
    const readingTime = post.fields.readingTime.text;

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
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
        </ArticleWrapper>

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
      </Layout>
    )
  }
}

export default BlogPostTemplate

const ArticleWrapper = styled.article`
  padding: 20px 10px;
  max-width: 900px;
  margin: auto
`

const ArticleHead = styled.section`
  text-align: center;
  margin-bottom: 30px;
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
      }
    }
  }
`
