import React from 'react'
import styled from 'styled-components'
import { COLORS } from "../utils/constants"
import Img from "gatsby-image"
import { PAGE_MAX_WIDTH } from "../utils/constants"


const ProfileHeader = ({name, avatar}) => {
  return (
    <HeaderWrapper>
      <Container>
        <Avatar sizes={avatar.childImageSharp.fluid}/>
      </Container>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  height: 150px;
  background: ${COLORS.primaryColor};
  font-family: 'Fira Sans', sans-serif;
  padding: 0 10px
`

const ProfileName = styled.p`
  font-weight: bold
`

const Avatar = styled(Img)`
  border-radius: 50%;
  max-height: 190px;
  max-width: 190px;
  position: relative;
  top: 40px;
  border: 3.6px solid ${COLORS.primaryColor};
  
  @media (max-width: 570px) {
    max-height: 150px;
    max-width: 150px;
    top: 80px
  }
  
`

const Container = styled.div`
  max-width: ${PAGE_MAX_WIDTH};
  margin: auto
`

export default ProfileHeader