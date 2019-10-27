import React from "react"
import PropTypes from "prop-types"
import PostCard from "../components/postCard"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { PAGE_MAX_WIDTH } from "../utils/constants"

const PostsWrapper = styled.div`
  max-width: ${PAGE_MAX_WIDTH};
  margin: auto;
  padding: 30px 10px
`

const TagHeader = styled.h1`
  margin-bottom: 26px;
  font-size: 28px;
  line-height: 34px;
`

const PostCount = styled.span`
  font-size: 50px;
  font-family: 'Vibes', cursive;
  margin-left: 6px;
  font-style: italic;
  color: #777474
`

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark

  const verbose = totalCount > 1 ? 'Posts' : 'Post'

  return (
    <Layout>
      <SEO title={`Posts with tag "${tag}"`}/>
      <PostsWrapper>
        <div>
          <TagHeader>{`${verbose} with tag `} <b>{tag}</b>  <PostCount>{totalCount}</PostCount></TagHeader>
            {edges.map(({ node }, i) => {
              const title = node.frontmatter.title || node.fields.slug
              const description = node.frontmatter.description || node.excerpt
              const { slug } = node.fields
              let url = `post${slug}`
              const { date } = node.frontmatter
              const { tags } = node.frontmatter
              const { author } = node.frontmatter
              const readingTime = node.fields.readingTime.text
              const { featuredImage } = node.frontmatter


              let image
              if (featuredImage) {
                image = node.frontmatter.featuredImage.childImageSharp.fluid
              }
              return (
                <PostCard
                  key={i}
                  description={description}
                  tags={tags}
                  title={title}
                  date={date}
                  url={url}
                  readingTime={readingTime}
                  image={image}
                  author={author}
                />
              )
            })}
        </div>
      </PostsWrapper>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired,
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
            tags
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