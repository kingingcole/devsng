import React from "react"
import Nav from "./navbar"
import Footer from "./footer"
import styled from "styled-components"
import Helmet from "react-helmet"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Helmet>
          <link href="https://fonts.googleapis.com/css?family=Lato|Roboto|Fira+Sans+Condensed|Vibes&display=swap" rel="stylesheet" />
        </Helmet>
        <header><Nav/></header>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            overflow: "hidden",
          }}
        >
          <Main>{children}</Main>

        </div>
        <Footer/>
      </>
    )
  }
}

const Main = styled.main`
  margin-top: 9vh
`

export default Layout
