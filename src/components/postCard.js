import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PostMetaData from "./postMetaData"
import Img from "gatsby-image"

const PostCard = ({ title, description, url, readingTime, image, date }) => {
  if (description.length > 150) {
    description = description.slice(0, 150) + "..."
  }

  return (
    <PostCardWrapper>
      <div className="row">
        <div className="col-8 col-md-9">
          <PostLink to={url}>{title}</PostLink>
          <Description className="d-none d-sm-block"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </div>
        {image &&
        <div className="col-4 col-md-3 text-right">
          <FeaturedImage sizes={image}/>
        </div>}
      </div>
      <PostMetaData readingTime={readingTime} date={date}/>
    </PostCardWrapper>
  )
}

const PostCardWrapper = styled.div`
  border-bottom: 1px solid #7e847f26;
  padding: 10px 0;
  
  
`

const FeaturedImage = styled(Img)`
  max-height: 150px;
  max-width: 150px;
  margin-left: auto;
  border-radius: 3px
`

const Description = styled.p`
font-size: 16px;
line-height: 1.5em;
color: #4D4141;
margin: 5px 0;

@media (max-width: 570px) {
    font-size: 14px;
  }
  
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
  margin-bottom: 10px;
  &:hover,
  &:active{
    color: red;
    border: none;
    text-decoration: none
  }
`

export default PostCard

/* Line */
