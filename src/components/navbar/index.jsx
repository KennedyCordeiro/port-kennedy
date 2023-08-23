import { NavWrapper, NavLink } from "./Navbar.styled";
import "./styles.css";

const Navbar = () => {
  return (
    <NavWrapper>
      <NavLink className="link">Home</NavLink>
      <NavLink className="link">Skills</NavLink>
      <NavLink className="link">Portifólio</NavLink>
      <NavLink className="link">Contact</NavLink>
    </NavWrapper>
  );
};

export default Navbar;
