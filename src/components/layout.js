
import * as React from "react"
import PropTypes from "prop-types"
import BackToTop from "./BackToTop/backToTop"

import "./layout.css"
import ResponsiveAppBar from "./Navbar/navbar"

const Layout = ({ children, pageTitle}) => {

  return (
    <>
    <ResponsiveAppBar 
    pageTitle = {pageTitle}/>
    <BackToTop/>
      {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      > */}
        <main>{children}</main>
        {/* </div> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
