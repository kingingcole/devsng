import React from "react"
import { Link } from "gatsby"
import Nav from './navbar'
import Footer from './footer'
import styled from 'styled-components'

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
      <header><Nav /></header>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          overflow: 'hidden'
          // padding: `0 ${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Main>{children}</Main>

      </div>
        <Footer />
        </>
    )
  }
}

const Main = styled.main`
  margin-top: 69px;
  
   @media (max-width: 570px) {
    margin-top: 59px
  }
`

export default Layout
