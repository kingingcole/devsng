import React from 'react'
import styled from 'styled-components'
import { COLORS } from "../utils/constants"
import Img from "gatsby-image"
import { PAGE_MAX_WIDTH } from "../utils/constants"


const ProfileHeader = ({name, avatar}) => {
  return (
    <HeaderWrapper>
      <div className="container">
        <Avatar sizes={avatar.childImageSharp.fluid}/>
      </div>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  height: 150px;
  background: ${COLORS.primaryColor};
  font-family: 'Fira Sans', sans-serif;
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
  border: 3.3px solid ${COLORS.primaryColor}
`

export default ProfileHeader