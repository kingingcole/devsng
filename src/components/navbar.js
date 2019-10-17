import React from 'react'
import styled from 'styled-components'
import logo from '../../content/assets/logo2.png'
import { Link } from "gatsby"
import {COLORS} from '../utils/constants'


const BREAK_POINT = '600px'
const NAVBAR_HEIGHT = '9vh'
const NAV_ON_MOBILE_HEIGHT = '91vh'

const Nav = () => {
  const toggleNav = () => {
    const navLinks = document.querySelector('.nav-links');
    const hamburgerLines = document.querySelectorAll('.hamburger-line');
    navLinks.classList.toggle('nav-active');

    const hamburgerLines_one_and_three = [hamburgerLines[0], hamburgerLines[2]];
    hamburgerLines_one_and_three.forEach(hamburgerLine => {
      hamburgerLine.classList.toggle('line1and3_active')
    })
    hamburgerLines[1].classList.toggle('line2_active')
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
        <HamburgerLine className={`hamburger-line`}/>
        <HamburgerLine className={`hamburger-line`}/>
        <HamburgerLine className={`hamburger-line`}/>
      </Hamburger>
    </NavBar>
  )
}

const NavBar = styled.nav`
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
  color: white;
  
  @media screen and (max-width:  ${BREAK_POINT}){
    color: white;
    font-size: 20px
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
  margin: 5px;
  height: 2px; 
  width: 20px;
  background: white;
  padding: 0;
  transition: all 0.4s;
`


export default Nav



