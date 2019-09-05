import React from 'react'
import styled from 'styled-components'
import Logo from './logo'
import {Helmet} from "react-helmet";
import { Link } from "gatsby"


const Nav = () => {
  return (
    <NavBar>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Fira+Sans&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="container" style={{maxWidth: '1100px'}}>
        <div className="row">
          <div className="col-2"><Logo/></div>
          <div className="col-10 text-right my-auto">
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
  background: #14957D;
  padding: 13px 0;
  font-family: 'Fira Sans', sans-serif;
  font-size: 18px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 9999;
  
  @media (max-width: 570px) {
    padding: 10px 0;
    font-size: auto
  }
`
const NavLinkList = styled.li`
  list-style-type: none;
  margin: 0 15px;
  display: inline
`
const NavLink = styled(Link)`
  text-decoration: none !important;
  color: #F9FAFB !important;
  box-shadow: none
`


export default Nav



