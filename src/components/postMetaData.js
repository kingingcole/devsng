import React, {Fragment} from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { COLORS } from "../utils/constants"
import { graphql, useStaticQuery, Link } from "gatsby"

const PostMetaData = ({ readingTime, date, authorAvatar, authorName, author, hideAuthorDetails }) => {


  const data = useStaticQuery(graphql`
    query Query {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "profile"}}}) {
        edges {
          node {
            id
            frontmatter {
              avatar {
                childImageSharp {
                  fixed(quality: 90, width: 25, height: 25) {
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

  // return (
  //   <MetaData>
  //     {hideAuthorDetails !== true && <AuthorDetails className={`row`}>
  //       <AuthorAvatar fixed={avatar}/>
  //       <AuthorLink to={authorProfileLink} className={`my-auto`}>{name}</AuthorLink>
  //       <PostDetails>
  //         <Text>{readingTime}</Text>
  //         <Text>{date}</Text>
  //       </PostDetails>
  //     </AuthorDetails>}
  //   </MetaData>
  // )
  return (
    <MetaData className="row">
      {hideAuthorDetails !== true && <Fragment>
      <AuthorAvatar fixed={avatar}/>
      <AuthorLink to={authorProfileLink} className={`my-auto`}>{name}</AuthorLink>
      </Fragment>}
      <Text className={`my-auto`}>{readingTime}</Text>
      <Text className={`my-auto`}>{date}</Text>
    </MetaData>
  )
}

const MetaData = styled.div`
  margin-top: 0px;
  margin: auto;
`


const AuthorAvatar = styled(Img)`
  border-radius: 50%;
  padding: 10px;
  border: 1px solid ${COLORS.primaryColor};
  padding: 0px;
  margin: 0px !important
`

const Text = styled.span`
  color: #000;
  font-size: 16px;
  opacity: 0.5;
  margin-right: 10px;
  mix-blend-mode: normal;
  @media (max-width: 570px) {
    font-size: 12px;
  }
  @media (max-width: 420px) {
    margin-right: 5px;
  }
`

const AuthorLink = styled(Link)`
  color: #000;
  font-size: 16px;
  line-height: 19px;
  font-weight: bold;
  opacity: 0.5;
  margin: 0px 10px;
  mix-blend-mode: normal;
  @media (max-width: 570px) {
    font-size: 12px;
  }
  @media (max-width: 420px) {
    margin: 0px 5px;
  }
  &:hover,
  &:active{
    color: ${COLORS.primaryColor};
    border: none;
    text-decoration: none
  }
`

export default PostMetaData
