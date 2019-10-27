import React from 'react'
import styled from 'styled-components'
import { PAGE_MAX_WIDTH } from "../utils/constants"

const ProfileBioSection = ({bio}) => {
	return (
			<PostsWrapper>
				<Text>Bio</Text>
				<BioTextWrapper>
					<BioText>{bio}</BioText>
				</BioTextWrapper>
			</PostsWrapper>
		)
}

const PostsWrapper = styled.section`
  max-width: ${PAGE_MAX_WIDTH};
  margin: auto;
  padding: 30px 10px;
`

const Text = styled.h3`
  margin-bottom: 26px;
  font-size: 28px;
  font-weight: bold;
  line-height: 34px;
`

const BioTextWrapper = styled.div`
  font-size: 20px;
  line-height: 29px;
  color: #4D4141;
  margin-bottom: 5px;
  max-width: 700px !important;
`

const BioText = styled.p``

export default ProfileBioSection
