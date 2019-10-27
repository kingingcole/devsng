import React from "react"
import styled from "styled-components"
import {COLORS} from '../utils/constants'
import header from '../../content/assets/header-bg.png'


const ArticleHeader = ({largeText, smallText}) => {
  return (
    <HeaderWrapper>
      <LargeText>{largeText}</LargeText>
      <SmallText>{smallText}</SmallText>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  padding: 30px 0;
  background: ${COLORS.primaryColor};
  background-image: url(${header});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  
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
  font-weight: 700
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
