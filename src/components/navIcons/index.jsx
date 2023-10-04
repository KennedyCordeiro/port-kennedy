import styled from "styled-components";
import navIcon1 from "../../assets/Images/nav-icon1.svg";
import navIcon2 from "../../assets/Images/nav-icon3.svg";
import navIcon3 from "../../assets/Images/iconGit.svg";

const SocialIcon = styled.div`
  height: 60px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

const EmptyIcon = styled.div`
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const IconLink = styled.a`
  width: 42px;
  height: 42px;
  margin: 5px;
  background: rgba(217, 217, 217, 0.1);
  display: inline-flex;
  border-radius: 50%;
  margin-right: 6px;
  align-items: center;
  justify-content: center;
  line-height: 1;
  border: 1px solid rgba(87, 87, 87, 0.5);
  cursor: pointer;

  &::before {
    content: "";
    width: 42px;
    height: 42px;
    position: absolute;
    background-color: #363636;
    border-radius: 50%;
    transform: scale(0);
    transition: 0.3s ease-in-out;
  }

  &:hover::before {
    transform: scale(1);
  }

  img {
    width: 40%;
    z-index: 1;
    transition: 0.3s ease-in-out;
  }
`;

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
      <SocialIcon>
        <IconLink>
          <img src={navIcon1} alt="Icone Linkedin" onClick={onClickLinkedin} />
        </IconLink>
        <IconLink>
          <img src={navIcon2} alt="Icone Contato" onClick={onClickInstagram} />
        </IconLink>
        <IconLink>
          <img
            src={navIcon3}
            alt="Icone Github"
            onClick={onClickGithub}
            style={{ width: "55%", marginBottom: "3px" }}
          />
        </IconLink>
      </SocialIcon>
    );
  }

  return (
    <EmptyIcon>
      {selectedIcon === "linkedin" && (
        <IconLink>
          <img src={navIcon1} alt="Icone Linkedin" onClick={onClickLinkedin} />
        </IconLink>
      )}
      {selectedIcon === "instagram" && (
        <IconLink>
          <img src={navIcon2} alt="Icone Contato" onClick={onClickInstagram} />
        </IconLink>
      )}
      {selectedIcon === "github" && (
        <IconLink>
          <img
            src={navIcon3}
            alt="Icone Github"
            onClick={onClickGithub}
            style={{ width: "55%", marginBottom: "3px" }}
          />
        </IconLink>
      )}
    </EmptyIcon>
  );
};

export default NavIcons;
