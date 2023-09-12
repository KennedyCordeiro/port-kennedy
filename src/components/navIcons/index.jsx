import navIcon1 from "../../assets/Images/nav-icon1.svg";
import navIcon2 from "../../assets/Images/nav-icon3.svg";
import "./Styles.css";
import navIcon3 from "../../assets/Images/iconGit.svg";
import navIcon4 from "../../assets/Images/iconEmail.svg";

const NavIcons = ({ selectedIcon }) => {
  const onClickLinkedin = () => {
    window.open("https://www.linkedin.com/in/kennedy-cordeiro-b05186198/");
  };
  const onClickInstagram = () => {
    window.open("https://www.instagram.com/_kennedycordeiro/");
  };
  const onClickGithub = () => {
    window.open("https://github.com/KennedyCordeiro/");
  };
  const onClickEmail = () => {
    window.open("malito:kennedy.engsoftware@gmail.com", "blank");
  };

  if (!selectedIcon) {
    return (
      <div className="social-icon">
        <a>
          <img src={navIcon1} alt="Icone Linkedin" onClick={onClickLinkedin} />
        </a>
        <a>
          <img src={navIcon2} alt="Icone Contato" onClick={onClickInstagram} />
        </a>

        <a>
          <img
            src={navIcon3}
            alt="Icone Github"
            onClick={onClickGithub}
            style={{ width: "55%", marginBottom: "3px" }}
          />
        </a>
      </div>
    );
  }

  return (
    <div className="empty-icon">
      {selectedIcon === "linkedin" && (
        <a>
          <img src={navIcon1} alt="Icone Linkedin" onClick={onClickLinkedin} />
        </a>
      )}
      {selectedIcon === "instagram" && (
        <a>
          <img src={navIcon2} alt="Icone Contato" onClick={onClickInstagram} />
        </a>
      )}
      {selectedIcon === "github" && (
        <a>
          <img
            src={navIcon3}
            alt="Icone Github"
            onClick={onClickGithub}
            style={{ width: "55%", marginBottom: "3px" }}
          />
        </a>
      )}

      {selectedIcon === "email" && (
        <a>
          <img
            src={navIcon4}
            alt="Icone email"
            onClick={onClickEmail}
            style={{ width: "55%" }}
          />
        </a>
      )}
    </div>
  );
};

export default NavIcons;
