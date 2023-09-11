import {
  NavWrapper,
  List,
  DivIcon,
  StyledLink,
  NavContainer,
  NavIconsSmart,
} from "./Navbar.styled";
import { useState, useEffect } from "react";
import MenuIcon from "../menuIcon";

const NavbarFixed = () => {
  const sections = [
    { id: "Home", label: "Home" },
    { id: "Skills", label: "Skills" },
    { id: "About", label: "About" },
    { id: "Contact", label: "Contact" },
  ];
  const [menuSmart, setMenuSmart] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section.id);
        if (scrollPosition > 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }

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
    <NavWrapper className={isScrolled && !menuSmart ? "black-background" : ""}>
      <NavContainer>
        <List>
          {sections.map((section) => (
            <StyledLink
              key={section.id}
              to={section.id}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => handleSetActiveLink(section.id)}
            >
              {section.label}
            </StyledLink>
          ))}
        </List>
      </NavContainer>

      <DivIcon>
        <MenuIcon
          HandleMenu={() => setMenuSmart((prevState) => !prevState)}
        ></MenuIcon>
      </DivIcon>

      <NavIconsSmart as="div" menuSmart={menuSmart}>
        {sections.map((section) => (
          <StyledLink
            key={section.id}
            to={section.id}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => {
              handleSetActiveLink(section.id);
            }}
            className={activeLink === section.id ? "link active" : "link"}
          >
            {section.label}
          </StyledLink>
        ))}
      </NavIconsSmart>
    </NavWrapper>
  );
};

export default NavbarFixed;
