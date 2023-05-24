import * as React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"

const Header = () => (
  <header>
    <div className="navbar">
      <div className="navbar-container">
        <div className="nav-img-container">
          <Link to="/">
            <img src={logo} alt="" className="blog-hero-image" />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              BLOG
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/" className="nav-link">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link">
              LINKS
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link">
              PROJECTS
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
)

export default Header
