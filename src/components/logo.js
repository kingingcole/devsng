import React from 'react'
import styled from 'styled-components'
import logo from '../../content/assets/logo-1.png'

const LogoWrapper = styled.div`
  padding: auto;
  margin: auto
`

const Logo = () => {
  console.log(logo)
  return (
    <LogoWrapper>
      <img src={logo} alt=""/>
    </LogoWrapper>
  )
}

export default Logo