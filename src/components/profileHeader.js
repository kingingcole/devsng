import React from "react"
import styled from "styled-components"
import { COLORS } from "../utils/constants"
import Img from "gatsby-image"
import { PAGE_MAX_WIDTH } from "../utils/constants"
import FeatherIcon from "feather-icons-react"
import header from '../../content/assets/header-bg.png'


const ProfileHeader = ({ name, avatar, links }) => {
  const { twitter, github, email, website } = links;
  return (
    <HeaderWrapper>
      <Container>
        <Avatar sizes={avatar.childImageSharp.fluid}/>
        <ProfileName>{name}</ProfileName>
        <ProfileLinks>
          {twitter && <Link href={twitter}><FeatherIcon icon="twitter" size="18"/></Link>}
          {github && <Link href={github}><FeatherIcon icon="github" size="18"/></Link>}
          {email && <Link href={`mailto:${email}`}><FeatherIcon icon="mail" size="18"/></Link>}
          {website && <Link href={website}><FeatherIcon icon="link" size="18"/></Link>}
        </ProfileLinks>
      </Container>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  height: 170px;
  background: ${COLORS.primaryColor};
  padding: 0 10px;
  margin-bottom: 80px;
  background-image: url(${header});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  
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
  bottom: 80px;
  font-size: 28px;
  
  @media (max-width: 570px) {
    left: 140px;
    font-size: 17px;
    bottom: 67px;
  }
`

const ProfileLinks = styled.div`
  position: relative;
  left: 220px;
  bottom: 60px;
  font-size: 1.3em;
  margin-top: 10px;
  
  @media (max-width: 570px) {
    left: 140px;
    font-size: 14.3px;
    bottom: 65px;
  }
`

const Link = styled.a`
  padding-right: 10px;
`

const Avatar = styled(Img)`
  border-radius: 50%;
  height: 190px;
  width: 190px;
  position: relative;
  top: 60px;
  border: 8px solid white;
  
  @media (max-width: 570px) {
    max-height: 130px;
    max-width: 130px;
    top: 30px;
    border-width: 6px
  }
  
`

const Container = styled.div`
  max-width: ${PAGE_MAX_WIDTH};
  margin: auto
`

export default ProfileHeader
