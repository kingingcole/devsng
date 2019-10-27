import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PostMetaData from "./postMetaData"
import Img from "gatsby-image"
import { COLORS } from "../utils/constants"
import kebabCase from "lodash/kebabCase"


const PostCard = ({ title, tags, description, url, readingTime, image, date, author, hideAuthorDetails}) => {
  if (description.length > 150) {
    description = description.slice(0, 150) + "..."
  }

  return (
    <PostCardWrapper>
      <div className="row">
        <div className="col-12">
          {tags && <TagsSection>
            <PrimaryTag to={`/tags/${kebabCase(tags[0])}/`}>{tags[0].toUpperCase()}</PrimaryTag>
            <SecondaryTag to={`/tags/${kebabCase(tags[1])}/`}>{tags[1].toUpperCase()}</SecondaryTag>
          </TagsSection>}
        </div>
      </div>
      <div className="row">
        <div className="col-9 col-md-9">
          <PostLink to={url} data-test-id={`post-title`}>{title}</PostLink>
          <Description className="d-none d-sm-block"
                       dangerouslySetInnerHTML={{
                         __html: description,
                       }}
          />
          <PostMetaData readingTime={readingTime} date={date} author={author} hideAuthorDetails={hideAuthorDetails}/>
        </div>
        {image &&
        <div className="col-3 col-md-3 text-right">
          <FeaturedImage sizes={image}/>
        </div>}
      </div>
    </PostCardWrapper>
  )
}

const PostCardWrapper = styled.div`
  border-bottom: 1px solid #7e847f26;
  padding: 10px 0;
`

const PostLink = styled(Link)`
  font-weight: 900;
  font-size: 24px;
  line-height: 28px;
  color: ${COLORS.primaryColor};
  text-decoration: none;
  box-shadow: none;
  text-transform: capitalize;
  margin-bottom: 10px;
  &:hover,
  &:active{
    color: ${COLORS.secondaryColor};
    border: none;
    text-decoration: none
  }
  @media (max-width: 570px) {
    font-size: 18px;
  }
`

const FeaturedImage = styled(Img)`
  max-height: 150px;
  max-width: 150px;
  margin-left: auto;
`

const Description = styled.p`
font-size: 20px;
line-height: 29px;
color: #4D4141;
margin-bottom: 5px;
max-width: 700px !important;
  
`

const TagsSection = styled.ul`
  list-style-type: none;
  margin: 0;
  margin-bottom: 7px;
  max-width: 300px;
  
  @media (max-width: 570px) {
    margin-bottom: 6px
  }
`

const Tag = styled(Link)`
  display: inline;
  margin-right: 10px;
  font-weight: bold;
  font-size: 12px;
  line-height: 17px;
  &hover, &focus: {
    color: red
  }
`

const PrimaryTag = styled(Tag)`
  color: #878F97
`
const SecondaryTag = styled(Tag)`
  color: #BCC3C0
`

export default PostCard

/* Line */
