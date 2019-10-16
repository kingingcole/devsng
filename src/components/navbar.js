import React from 'react'
import styled from 'styled-components'
import logo from '../../content/assets/logo-1.png'
import { Link } from "gatsby"
import {COLORS} from '../utils/constants'


const BREAK_POINT = '600px'
const NAVBAR_HEIGHT = '9vh'
const NAV_ON_MOBILE_HEIGHT = '91vh'

const Nav = () => {
  const toggleNav = () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('nav-active')
  }

  return (
    <NavBar>
      <NavLogo>
        <img src={logo} alt=""/>
      </NavLogo>
      <NavLinks className={`nav-links`}>
        <NavLinkList><NavLink to={`#`}>Home</NavLink></NavLinkList>
        <NavLinkList><NavLink to={`#`}>About</NavLink></NavLinkList>
        <NavLinkList><NavLink to={`#`}>Services</NavLink></NavLinkList>
      </NavLinks>
      <Hamburger className={`hamburger`} onClick={toggleNav}>
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
  padding: 0 5%;
  box-shadow: 1px 0px 1px 1px #eee 
`

const NavLinks = styled.ul`
  margin: 0;
  display: flex;
  justify-content: space-around;
  width: 25%;
  transition: all 0.4s ease-out;
  
  @media screen and (max-width: 850px){
    width: 40%;
  }
  
  @media screen and (max-width: ${BREAK_POINT}){
    flex-direction: column;
    position: absolute;
    background-color: ${COLORS.primaryColor};
    top:  ${NAVBAR_HEIGHT};
    height: ${NAV_ON_MOBILE_HEIGHT};
    right: 0px;
    width: 100%;
    justify-content: center;
    align-items: center;
    transform: translateY(100%)
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



