import { NavWrapper, List, StyledLink } from "./Navbar.styled";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const NavbarFixed = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavWrapper>
      <List>
        <ScrollLink
          to="Home"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className={activeLink === "Home" ? "link active" : "link"}
          onClick={() => handleLinkClick("Home")}
        >
          Home
        </ScrollLink>

        <StyledLink
          href="#Skills"
          className={activeLink === "Skills" ? "link active" : "link"}
          onClick={() => handleLinkClick("Skills")}
        >
          Skills
        </StyledLink>

        <StyledLink
          href="#"
          className={activeLink === "About" ? "link active" : "link"}
          onClick={() => handleLinkClick("About")}
        >
          About
        </StyledLink>

        <StyledLink
          href="#"
          className={activeLink === "Contact" ? "link active" : "link"}
          onClick={() => handleLinkClick("Contact")}
        >
          Contact
        </StyledLink>
      </List>
    </NavWrapper>
  );
};

export default NavbarFixed;
