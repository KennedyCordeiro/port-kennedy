import { NavWrapper, NavLink, NavIcons } from "./Navbar.styled";
import "./styles.css";
import navIcon1 from "../../assets/Images/nav-icon1.svg";
import navIcon2 from "../../assets/Images/nav-icon2.svg";
import navIcon3 from "../../assets/Images/nav-icon3.svg";

const Navbar = () => {
  return (
    <NavWrapper>
      <NavLink className="link">Home</NavLink>
      <NavLink className="link">Skills</NavLink>
      <NavLink className="link">Contact</NavLink>

      <NavIcons>
        <img src={navIcon1} />
        <img src={navIcon2} />
        <img src={navIcon3} />
      </NavIcons>
    </NavWrapper>
  );
};

export default Navbar;
