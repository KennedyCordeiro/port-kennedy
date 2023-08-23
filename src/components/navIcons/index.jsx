import navIcon1 from "../../assets/Images/nav-icon1.svg";
import navIcon2 from "../../assets/Images/nav-icon3.svg";
import "./Styles.css";

const NavIcons = () => {
  const onClickLinkedin = () => {
    window.open("https://www.linkedin.com/in/kennedy-cordeiro-b05186198/");
  };
  const onClickInstagram = () => {
    window.open("https://www.instagram.com/_kennedycordeiro/");
  };

  return (
    <div className="social-icon">
      <a>
        <img src={navIcon1} alt="Icone Linkedin" onClick={onClickLinkedin} />
      </a>
      <a>
        <img src={navIcon2} alt="Icone Contato" onClick={onClickInstagram} />
      </a>
    </div>
  );
};

export default NavIcons;
