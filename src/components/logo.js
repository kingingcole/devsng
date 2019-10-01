import React from 'react'
import styled from 'styled-components'
import {ReactComponent as LogoSVG} from './logo.svg'

const LogoWrapper = styled.p`
  color: white;
  margin: 0;
  font-size: 28.8px;
  font-weight: 800
`

const Logo = () => {
  console.log(LogoSVG)
  return (
	<>
		dev
	</>
  )
}

export default Logo