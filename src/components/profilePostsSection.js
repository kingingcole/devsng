import React from "react"
import styled from "styled-components"
import { PAGE_MAX_WIDTH } from "../utils/constants"
import PostCard from "./postCard"


const ProfilePostsSection = ({ posts }) => {
  return (
    <>
      <PostsWrapper className={`container`}>
        <Text>{posts.length > 1 ? 'Posts' : 'Post'}  <PostCount>{posts.length}</PostCount></Text>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const description = node.frontmatter.description || node.excerpt
          const { slug } = node.fields
          const url = `post${slug}`
          const { date } = node.frontmatter
          const { author } = node.frontmatter
          const readingTime = node.fields.readingTime.text
          const { featuredImage } = node.frontmatter
          const { tags } = node.frontmatter
          console.log(tags)

          let image
          if (featuredImage) {
            image = node.frontmatter.featuredImage.childImageSharp.fluid
          }

          return (
            <PostCard
              tags={tags}
              hideAuthorDetails={true}
              key={slug}
              description={description}
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
    </>
  )
}

export default ProfilePostsSection

const PostsWrapper = styled.div`
  max-width: ${PAGE_MAX_WIDTH};
  margin: auto;
  padding: 30px 10px;
`

const Text = styled.h3`
  margin-bottom: 26px;
  font-size: 28px;
  font-weight: bold;
  line-height: 34px;
`

const PostCount = styled.span`
  font-size: 50px;
  font-family: 'Vibes', cursive;
  margin-left: 6px;
  font-style: italic;
  color: #777474
`