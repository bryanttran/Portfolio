import React from "react"
import PropTypes from "prop-types"
import "./css/layout.css"

import "./css/materialize.min.css"
import Header from "./header"
import Footer from "./footer"


const Layout = ({ children }) => {
  return ( 
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1200,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>

      </div> 
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
