import React from 'react'
import styled from 'styled-components'
import { PAGE_MAX_WIDTH } from "../utils/constants"

const ProfileBioSection = ({bio}) => {
	return (
			<PostsWrapper>
				<Text>Bio</Text>
				<BioText>{bio}</BioText>
			</PostsWrapper>
		)
}

const PostsWrapper = styled.section`
  max-width: ${PAGE_MAX_WIDTH};
  margin: auto;
  padding: 20px 10px 0px 10px;
`

const Text = styled.h3`
  margin-bottom: 5px;
  font-size: 28px;
  font-weight: bold;
  line-height: 34px;
`

const BioTextWrapper = styled.div`
  font-size: 20px;
  line-height: 29px;
  color: #4D4141;
  max-width: 700px !important;
`

const BioText = styled.p`
  font-size: 20px;
  max-width: 700px;
  
  @media (max-width: 570px) {
    font-size: 18px;
  }
`

export default ProfileBioSection
