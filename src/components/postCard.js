import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const PostCard = ({title, description, slug}) => {
  return(
      <div className="row">
        <div className="col-9">
          <Link to={slug} style={titleStyle}>{title}</Link>
          <Description
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </div>
      </div>
  )
}

const titleStyle = {
  fontFamily: 'Fira Sans',
  fontStyle: 'normal',
  fontWeight: '800',
  fontSize: '24px',
  lineHeight: '32px',
  color: '#14957D',
  textDecoration: 'none',
  boxShadow: 'none',
  textTransform: 'capitalize'
}

const Description = styled.p`
font-size: 16px;
line-height: 29px;
color: #4D4141;
`

export default PostCard