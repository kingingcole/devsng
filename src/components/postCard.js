import React from 'react'
import styled from 'styled-components'

const PostCard = ({title, description}) => {
  return(
      <div className="row">
        <div className="col-9">
          <Title>{title}</Title>
          <Description>
            <p>
              dangerouslySetInnerHTML={{
              __html: description,
            }}
            </p>
          </Description>
        </div>
      </div>
  )
}

const Title = styled.a`
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 32px;
  color: #14957D;
`
const Description = styled.p`
font-size: 20px;
line-height: 29px;
color: #4D4141;
`

export default PostCard