import React from 'react'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header>
        <nav>
            <Link to="/">Home</Link>
            <a href="#">Roadmap</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
            <Link to="/docs">Docs</Link>
        </nav>
            <FontAwesomeIcon icon={faBars} />
    </header>
  )
}

export default Header
