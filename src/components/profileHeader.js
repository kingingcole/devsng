import React from 'react'
import styled from 'styled-components'
import { COLORS } from "../utils/constants"

const ProfileHeader = ({name, avatar}) => {
  return (
    <HeaderWrapper>
      <ProfileName>{name}</ProfileName>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  padding: 40px 0;
  height: auto;
  background: ${COLORS.primaryColor};
  font-family: 'Fira Sans', sans-serif;
  
`

const ProfileName = styled.p`
  font-weight: bold
`

export default ProfileHeader