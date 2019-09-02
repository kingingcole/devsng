import React from 'react';
import styled from 'styled-components'

const PostMetaData = ({readingTime}) => {
  return (
    <MetaData>
      <Text>{readingTime}</Text>
      <Text>Aug 20th, 2019</Text>
    </MetaData>
  )
}

const MetaData = styled.div`
  display: block
`

const Text = styled.p`
  display: inline;
  color: #000;
  font-size: 14px;
  opacity: 0.5;
  margin-right: 10px;
  mix-blend-mode: normal;
  @media (max-width: 570px) {
    font-size: 12px;
  }
`

export default PostMetaData