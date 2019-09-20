import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { COLORS } from "../utils/constants"
import { graphql, useStaticQuery, Link } from "gatsby"

const PostMetaData = ({ readingTime, date, authorAvatar, authorName, author , hideAuthorDetails}) => {


  const data = useStaticQuery(graphql`
    query Query {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "profile"}}}) {
        edges {
          node {
            id
            frontmatter {
              avatar {
                childImageSharp {
                  fixed(quality: 90, width: 30, height: 30) {
                    ...GatsbyImageSharpFixed_withWebp
                  }
                }
              }
              name
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)


  const slug = `/${author}/`
  const authorProfileLink = `profile${slug}`
  const postAuthor = data.allMarkdownRemark.edges.find(author => author.node.fields.slug === slug)
  const { name } = postAuthor.node.frontmatter
  const avatar = postAuthor.node.frontmatter.avatar.childImageSharp.fixed

  return (
    <MetaData>
      {hideAuthorDetails !== true && <AuthorDetails className={`row`}>
        <AuthorAvatar fixed={avatar}/>
        <AuthorLink to={authorProfileLink}>{name}</AuthorLink>
      </AuthorDetails>}
      <PostDetails>
        <Text>{readingTime}</Text>
        <Text>{date}</Text>
      </PostDetails>
    </MetaData>
  )
}

const MetaData = styled.div`
  margin-top: 10px;
`

const AuthorDetails = styled.div`
  margin: 5px auto
`

const PostDetails = styled.div`
    margin: 5px auto
`

const AuthorAvatar = styled(Img)`
  border-radius: 50%;
  padding: 10px;
  border: 1px solid ${COLORS.primaryColor};
  padding: 0px;
  margin: 0px !important
`

const Text = styled.p`
  display: inline;
  color: #000;
  font-size: 14px;
  opacity: 0.5;
  margin: 0px 5px;
  mix-blend-mode: normal;
  @media (max-width: 570px) {
    font-size: 12px;
  }
`

const AuthorLink = styled(Link)`
  display: inline;
  color: #000;
  font-size: 14px;
  opacity: 0.5;
  margin: 0px 5px;
  mix-blend-mode: normal;
  @media (max-width: 570px) {
    font-size: 12px;
  }
  &:hover,
  &:active{
    color: ${COLORS.primaryColor};
    border: none;
    text-decoration: none
  }
`

export default PostMetaData
