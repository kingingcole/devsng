import React from "react"
import styled from "styled-components"
import { COLORS } from "../utils/constants"
import Img from "gatsby-image"
import { PAGE_MAX_WIDTH } from "../utils/constants"


const ProfileHeader = ({ name, avatar, links }) => {
  console.log(links)
  return (
    <HeaderWrapper>
      <Container>
        <Avatar sizes={avatar.childImageSharp.fluid}/>
        <ProfileName>{name}</ProfileName>
      </Container>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  height: 150px;
  background: ${COLORS.primaryColor};
  padding: 0 10px;
  margin-bottom: 80px;
  
  @media (max-width: 570px) {
    height: 100px;
    margin-bottom: 70px
  }
`

const ProfileName = styled.p`
  font-weight: bold;
  color: white;
  position: relative;
  left: 220px;
  bottom: 85px;
  font-size: 1.3em;
  
  @media (max-width: 570px) {
    left: 140px;
    font-size: 14.3px;
    bottom: 65px;
  }
`

const Avatar = styled(Img)`
  border-radius: 50%;
  max-height: 190px;
  max-width: 190px;
  position: relative;
  top: 40px;
  border: 3.6px solid whitesmoke;
  
  @media (max-width: 570px) {
    max-height: 130px;
    max-width: 130px;
    top: 30px
  }
  
`

const Container = styled.div`
  max-width: ${PAGE_MAX_WIDTH};
  margin: auto
`

export default ProfileHeader
