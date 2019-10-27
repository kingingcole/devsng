import React from "react"
import styled from "styled-components"
import { PAGE_MAX_WIDTH } from "../utils/constants"
import PostCard from "./postCard"
import {Link} from 'gatsby'


const ProfilePostsSection = ({ posts }) => {
  console.log(posts.length)

  return (
      <PostsWrapper>
        <Text>{posts.length > 1 ? 'Posts' : 'Post'}  <PostCount>{posts.length}</PostCount></Text>
        {posts.length > 0 ? posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const description = node.frontmatter.description || node.excerpt
          const { slug } = node.fields
          const url = `post${slug}`
          const { date } = node.frontmatter
          const { author } = node.frontmatter
          const readingTime = node.fields.readingTime.text
          const { featuredImage } = node.frontmatter
          const { tags } = node.frontmatter

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
        }) : (
          <div>
            <h5>This user has a profile but no posts yet!</h5>
            <p>If this is you, click <Link to='/post/submitting-a-post/'>here</Link> to learn how to submit a post or <a href="https://github.com/kingingcole/devsng/pull/new/master">create a pull requst</a>.</p>
          </div>
        )}
      </PostsWrapper>
  )
}

export default ProfilePostsSection

const PostsWrapper = styled.section`
  max-width: ${PAGE_MAX_WIDTH};
  margin: auto;
  padding: 20px 10px 0px 10px;
`

const Text = styled.h3`
  margin-bottom: 5px;
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