import { NavWrapper, List, StyledLink, NavContainer } from "./Navbar.styled";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import MenuIcon from "../menuIcon";

const NavbarFixed = () => {
  const sections = [
    { id: "Home", label: "Home" },
    { id: "Skills", label: "Skills" },
    { id: "About", label: "About" },
    { id: "Contact", label: "Contact" },
  ];

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const [activeLink, setActiveLink] = useState("Home");

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section.id);

        if (
          scrollPosition >= sectionElement.offsetTop - 100 &&
          scrollPosition <
            sectionElement.offsetTop + sectionElement.offsetHeight - 100
        ) {
          handleSetActiveLink(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavWrapper>
      <NavContainer>
        <List>
          {sections.map((section) => (
            <ScrollLink
              key={section.id}
              to={section.id}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => handleSetActiveLink(section.id)}
            >
              <StyledLink
                className={activeLink === section.id ? "link active" : "link"}
              >
                {section.label}
              </StyledLink>
            </ScrollLink>
          ))}
        </List>
        <MenuIcon className="menuIcon"></MenuIcon>
      </NavContainer>
    </NavWrapper>
  );
};

export default NavbarFixed;
