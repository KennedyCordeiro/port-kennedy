import { NavWrapper, List, Link } from "./Navbar.styled";
import "./styles.css";
import "bootstrap";
import { useState } from "react";

const NavbarFixed = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <NavWrapper>
      <List className="list">
        <Link
          href="#Home"
          className={activeLink === "Home" ? "link active" : "link"}
          onClick={() => handleLinkClick("Home")}
        >
          Home
        </Link>

        <Link
          href="#Skills"
          className={activeLink === "Skills" ? "link active" : "link"}
          onClick={() => handleLinkClick("Skills")}
        >
          Skills
        </Link>

        <Link
          href="#"
          className={activeLink === "About" ? "link active" : "link"}
          onClick={() => handleLinkClick("About")}
        >
          About
        </Link>

        <Link
          href="#"
          className={activeLink === "Contact" ? "link active" : "link"}
          onClick={() => handleLinkClick("Contact")}
        >
          Contact
        </Link>
      </List>
    </NavWrapper>
  );
};

export default NavbarFixed;
