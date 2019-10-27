import React from "react"
import { graphql } from "gatsby"
import ArticleHeader from '../components/articleHeader'
import PostCard from '../components/postCard'
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PAGE_MAX_WIDTH } from "../utils/constants"


class Guides extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges.filter(post => post.node.frontmatter.tags.includes('guide'))

    const PostsWrapper = styled.div`
      max-width: ${PAGE_MAX_WIDTH};
      margin: auto;
      padding: 20px 10px
    `

    const Text = styled.h1`   
    margin-bottom: 26px;
    margin-top: 16px;
    font-size: 28px;
    font-weight: bold;
    line-height: 34px
    `

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Guides" />
        <ArticleHeader smallText='Definitive guides on how to use the DevsNG platform.' largeText="Guides"/>
        <PostsWrapper>
          <Text>Latest Guides</Text>
          {posts.map(({ node }, i) => {
            const title = node.frontmatter.title || node.fields.slug
            const description = node.frontmatter.description || node.excerpt
            const {slug} = node.fields
            let url = `post${slug}`
            const {date} = node.frontmatter
            const {tags} = node.frontmatter
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
        </PostsWrapper>
      </Layout>
    )
  }
}

export default Guides

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { type: {eq: "post"}, published: {eq: true}, tags: {in: "admin"} } }
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
