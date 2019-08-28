import React from "react"
import { Link } from "gatsby"
import Nav from './navbar'

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
          // padding: `0 ${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <main style={{marginTop: '70px'}}>{children}</main>

      </div>
        </>
    )
  }
}

export default Layout
