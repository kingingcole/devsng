import React from 'react'
import styled from 'styled-components'
import logo from '../../content/assets/logo-1.png'
import { Link } from "gatsby"
import {COLORS} from '../utils/constants'


const BREAK_POINT = '600px'
const NAVBAR_HEIGHT = '8vh'
const NAV_ON_MOBILE_HEIGHT = '92vh'

const Nav = () => {
  return (
    <NavBar>
      <NavLogo>
        <img src={logo} alt=""/>
      </NavLogo>
      <NavLinks>
        <NavLinkList><NavLink to={`#`}>Home</NavLink></NavLinkList>
        <NavLinkList><NavLink to={`#`}>About</NavLink></NavLinkList>
        <NavLinkList><NavLink to={`#`}>Services</NavLink></NavLinkList>
      </NavLinks>
      <Hamburger>
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </Hamburger>
    </NavBar>
  )
}

const NavBar = styled.nav`
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: ${NAVBAR_HEIGHT};
  position: fixed;
  width: 100%;
  z-index: 1000;
  padding: 0 5%
`

const NavLinks = styled.ul`
  margin: 0;
  display: flex;
  justify-content: space-around;
  width: 25%;
  
  @media screen and (max-width: 850px){
    width: 40%;
  }
  
  @media screen and (max-width: ${BREAK_POINT}){
    flex-direction: column;
    position: absolute;
    background: ${COLORS.primaryColor};
    top:  ${NAVBAR_HEIGHT};
    height: ${NAV_ON_MOBILE_HEIGHT};
    right: 0px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`

const NavLinkList = styled.li`
  list-style-type: none;
  margin: 0;
  
  @media screen and (max-width:  ${BREAK_POINT}){
    margin: 20px 0
  }
`
const NavLink = styled(Link)`
  font-weight: 700;
  
  @media screen and (max-width:  ${BREAK_POINT}){
    color: white;
  }
`

const NavLogo = styled.div`
  width: 5em
`

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  
  @media screen and (max-width:  ${BREAK_POINT}){
    display: block
  }
`

const HamburgerLine = styled.div`
  width: 20px;
  margin: 3px;
  height: 2px; 
  background: ${COLORS.primaryColor}
`

export default Nav



