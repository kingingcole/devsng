import React from "react"
import styled from "styled-components"
import {COLORS} from '../utils/constants'


const ArticleHeader = () => {
  return (
    <HeaderWrapper>
      <LargeText>Articles</LargeText>
      <SmallText>Tech articles from some of the best software developers in Nigeria.</SmallText>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  padding: 20px 0;
  background: ${COLORS.primaryColor};
  
  @media (max-width: 570px) {
    display: none
  }
`

const LargeText = styled.h1` 
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 63px;
  text-align: center;
  color: #FFFFFF;
`
const SmallText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #F0F0F0
`


export default ArticleHeader
