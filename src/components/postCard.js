import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PostMetaData from "./postMetaData"

const PostCard = ({ title, description, slug, readingTime }) => {
  if (description.length > 150) {
    description = description.slice(0, 150) + "..."
  }
  return (
    <PostCardWrapper>
      <div className="row">
        <div className="col-9">
          <PostLink to={slug}>{title}</PostLink>
          <Description
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </div>
      </div>
      <PostMetaData readingTime={readingTime}/>
    </PostCardWrapper>
  )
}

const PostCardWrapper = styled.div`
  border-bottom: 1px solid #7E847F;
  padding: 10px 0
`


const Description = styled.p`
font-size: 18px;
line-height: 1.5em;
color: #4D4141;
margin: 5px 0
`

const PostLink = styled(Link)`
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 32px;
  color: #14957D;
  text-decoration: none;
  box-shadow: none;
  text-transform: capitalize;
  margin-bottom: 10px
`

export default PostCard

/* Line */
