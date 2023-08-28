import { NavWrapper, List, Link } from "./Navbar.styled";
import "./styles.css";

const Navbar = () => {
  return (
    <NavWrapper>
      <List className="list">
        <Link href="#" className="link active">
          Store
        </Link>

        <Link href="#" className="link">
          Mac
        </Link>

        <Link href="#" className="link">
          iPad
        </Link>

        <Link href="#" className="link">
          iPhone
        </Link>

        <Link href="#" className="link">
          Watch
        </Link>
      </List>
    </NavWrapper>
  );
};

export default Navbar;
