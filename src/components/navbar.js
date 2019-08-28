import React from 'react'
import styled from 'styled-components'
import Logo from './logo'
import {Helmet} from "react-helmet";


const Nav = () => {
  return (
    <NavBar>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Fira+Sans&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="container" style={{maxWidth: '1000px'}}>
        <div className="row">
          <div className="col-2"><Logo/></div>
          <div className="col-10 text-right my-auto">
            <ul className="col-12 mb-0">
              <NavLinkList className=""><NavLink href="/">Home</NavLink></NavLinkList>
              <NavLinkList className=""><NavLink href="/">About</NavLink></NavLinkList>
              <NavLinkList className=""><NavLink href="/">Home</NavLink></NavLinkList>
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
  overlay: 9999;
`
const NavLinkList = styled.li`
  list-style-type: none;
  margin: 0 15px;
  display: inline
`
const NavLink = styled.a`
  text-decoration: none !important
  color: #F9FAFB;
  box-shadow: none
`


export default Nav



