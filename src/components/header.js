import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './css/header.css'

const Header = () => (
  <nav className='header nav-wrapper'>
      <Link to="/" className='logo-wrapper' >
        <span className='logo-text'>BT</span>
      </Link>

      <ul>
        <li className='acitve'>
          <Link to="/" className='navbar-link active ' >
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className='navbar-link'>
            Projects
          </Link>
        </li>
      </ul>
    
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
