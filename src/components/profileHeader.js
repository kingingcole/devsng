import React from "react"
import styled from "styled-components"
import { COLORS } from "../utils/constants"
import Img from "gatsby-image"
import { PAGE_MAX_WIDTH } from "../utils/constants"
import FeatherIcon from "feather-icons-react"


const ProfileHeader = ({ name, avatar, links }) => {
  const { twitter, github, email, website } = links;
  return (
    <HeaderWrapper>
      <Container>
        <Avatar sizes={avatar.childImageSharp.fluid}/>
        <ProfileName>{name}</ProfileName>
        <ProfileLinks>
          {twitter && <Link href={twitter}><FeatherIcon icon="twitter" size="17"/></Link>}
          {github && <Link href={github}><FeatherIcon icon="github" size="17"/></Link>}
          {email && <Link href={email}><FeatherIcon icon="mail" size="17"/></Link>}
          {website && <Link href={website}><FeatherIcon icon="link" size="17"/></Link>}
        </ProfileLinks>
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

const ProfileLinks = styled.div`
  position: relative;
  left: 220px;
  bottom: 75px;
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
