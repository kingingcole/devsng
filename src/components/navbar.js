import React from 'react'
import styled from 'styled-components'
import Logo from './logo'
import { Link } from "gatsby"
import {COLORS} from '../utils/constants'


const Nav = () => {
  return (
    <NavBar>
      <div className="container" style={{maxWidth: '1100px'}}>
        <div className="row">
          <div className="col-3 col-lg-2">
            <NavLogo><Logo /></NavLogo>
          </div>
          <div className="col-9 col-lg-10 text-right my-auto">
            <ul className="col-12 mb-0">
              <NavLinkList className=""><NavLink to="/">Home</NavLink></NavLinkList>
              <NavLinkList className=""><NavLink to="/">About</NavLink></NavLinkList>
              <NavLinkList className=""><NavLink to="/">Home</NavLink></NavLinkList>
            </ul>
          </div>
        </div>
      </div>
    </NavBar>
  )
}

const NavBar = styled.nav`
  background: ${COLORS.primaryColor};
  background: white;
  box-shadow: 0px 2px 5px whitesmoke;
  padding: 12px 0;
  font-size: 18px;
  position: fixed;
  height: auto;
  width: 100%;
  top: 0;
  z-index: 9999;
  
  @media (max-width: 570px) {
    // padding: 10px 0;
    font-size: 14px !important
  }
`
const NavLinkList = styled.li`
  list-style-type: none;
  margin: 0 10px;
  display: inline
  
`
const NavLink = styled(Link)`
  text-decoration: none !important;
  color: #F9FAFB !important;
  color: ${COLORS.primaryColor} !important;
  box-shadow: none;
  font-weight: 700;
`

const NavLogo = styled(Link)``


export default Nav



