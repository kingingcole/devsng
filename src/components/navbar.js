import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { COLORS } from "../utils/constants"


import Logo from "../icons/Logo2"

const BREAK_POINT = "700px"
const NAVBAR_HEIGHT = "9vh"
const NAV_ON_MOBILE_HEIGHT = "91vh"

const Nav = () => {
  const toggleNav = () => {
    const navLinks = document.querySelector(".nav-links")
    const hamburgerLines = document.querySelectorAll(".hamburger-line")
    navLinks.classList.toggle("nav-active")

    const hamburgerLines_one_and_three = [hamburgerLines[0], hamburgerLines[2]]
    hamburgerLines_one_and_three.forEach(hamburgerLine => {
      hamburgerLine.classList.toggle("line1and3_active")
    })
    hamburgerLines[1].classList.toggle("line2_active")
  }

  return (
    <NavBar>
      <NavLogo>
        <Link to='/'><Logo/></Link>
      </NavLogo>
      <NavLinks className={`nav-links`}>
        <NavLinkList><NavLink to={`/`} activeClassName='active-link'>Home</NavLink></NavLinkList>
        <NavLinkList><NavLink to={`/guides`} activeClassName='active-link'>Guides</NavLink></NavLinkList>
        <NavLinkList><NavLink to={`/post/submitting-a-post/`} activeClassName='active-link'>Submit Post</NavLink></NavLinkList>
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
  background: ${COLORS.primaryColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${NAVBAR_HEIGHT};
  position: fixed;
  width: 100%;
  z-index: 1000;
  padding: 0 5%;
`

const NavLinks = styled.ul`
  margin: 0;
  display: flex;
  justify-content: space-around;
  width: 25%;
  transition: all 0.4s ease-out;
  
  @media screen and (max-width: 970px){
    width: 35%;
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
  color: white;
  opacity: 0.9;

  @media screen and (max-width:  ${BREAK_POINT}){
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



