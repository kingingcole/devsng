import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import PostMetaData from "../components/postMetaData"
import { COLORS } from "../utils/constants"


class ProfileTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { slug } = this.props.pageContext

    const { name } = post.frontmatter
    console.log(name, slug)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={name}
          description={`Profile of ${name} | DevsNg`}
        />
      </Layout>
    )
  }
}

export default ProfileTemplate



export const userQuery = graphql`
  query USerProfileBySlug($slug: String!) {
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
        name
      }
    }
  }
`
