import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const PostCard = ({title, description, slug}) => {
  return(
      <PostCardWrapper className="row">
        <div className="col-9">
          <Link to={slug} style={titleStyle}>{title}</Link>
          <Description
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </div>
      </PostCardWrapper>
  )
}

const PostCardWrapper = styled.div`
  border-bottom: 1px solid #7E847F;
  padding: 10px 0
`

const titleStyle = {
  fontFamily: 'Fira Sans',
  fontStyle: 'normal',
  fontWeight: '800',
  fontSize: '24px',
  lineHeight: '32px',
  color: '#14957D',
  textDecoration: 'none',
  boxShadow: 'none',
  textTransform: 'capitalize',
  marginBottom: '10px'
}

const Description = styled.p`
font-size: 20px;
line-height: 1.5em;
color: #4D4141;

`

export default PostCard

/* Line */
