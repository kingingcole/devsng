import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProfilePostsSection from '../components/profilePostsSection'
import ProfileHeader from '../components/profileHeader'


class ProfileTemplate extends React.Component {
  render() {
    const author = this.props.data.markdownRemark
    const posts = this.props.data.allMarkdownRemark.edges

    const siteTitle = this.props.data.site.siteMetadata.title
    const { slug } = this.props.pageContext

    const { name } = author.frontmatter
    const {avatar} = author.frontmatter


    return (
      <Layout>
        <SEO
          title={name}
          description={`Profile of ${name} | DevsNg`}
        />
        <ProfileHeader avatar={avatar} name={name}/>
        <ProfilePostsSection posts={posts} siteTitle={siteTitle}/>
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
        avatar{
          childImageSharp {
            fluid(quality: 90, maxWidth: 3000){
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "post"}, author: {eq: "emeruche-cole"}}}, , sort: {order: DESC, fields: frontmatter___date}) {
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
