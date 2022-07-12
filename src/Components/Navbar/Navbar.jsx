import React from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
const Navbar = () => {
  return (
    <nav className="Navbar">
      <h1>ENX_DEV</h1>
      <div>
        <Link to="Skills" smooth="true" duration={500}>
          Skills
        </Link>
        <Link to="Projects" smooth duration={700}>
          Projects
        </Link>
        <Link to="Contact" smooth duration={1000}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
