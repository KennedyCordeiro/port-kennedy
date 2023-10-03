import { useState } from "react";
import * as C from "./About.styled";
import Widgets from "../../components/widgets";
import { Snackbar } from "@mui/material";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Line from "../../assets/Images/Line.svg";
import Separator from "../../assets/Images/separator.svg";

const About = () => {
  const [alertInfo, setAlertInfo] = useState(false);
  const [activeSection, setActiveSection] = useState("About");
  const icons = [
    {
      sectionIcon: C.Icon1,
      title: "FitBank 450",
      titleSection: C.DivTitleIcon1,
    },
    {
      sectionIcon: C.Icon2,
      title: "Bacharel em Engeharia de Software",
      titleSection: C.DivTitleIcon2,
    },
    {
      sectionIcon: C.Icon3,
      title: "Desenvolvedor Full-Stack",
      titleSection: C.DivTitleIcon3,
    },
    {
      sectionIcon: C.Icon4,
      title: "Desenvolvedor Front-End",
      titleSection: C.DivTitleIcon4,
    },
    {
      sectionIcon: C.Icon5,
      title: "Freelancer",
      titleSection: C.DivTitleIcon5,
    },
  ];
  const TransitionSlide = (props) => {
    return <Slide {...props} direction="right" />;
  };

  const handleInfo = () => {
    setAlertInfo((prevState) => !prevState);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertInfo(false);
  };

  const handleIcon = (title) => {
    console.log(title);
  };

  return (
    <C.Container>
      <C.DivTitle>
        <C.Title onClick={handleInfo}>About</C.Title>
      </C.DivTitle>
      <C.SeparatorImg src={Separator} />
      <C.LineSeparator src={Line} className="Line" />
      {icons.map((icon, index) => (
        <div key={index} style={{ display: "flex" }}>
          <icon.sectionIcon onClick={() => handleIcon(icon.title)} />
          <icon.titleSection>{icon.title}</icon.titleSection>
        </div>
      ))}

      <C.MidSection></C.MidSection>
      <Snackbar
        open={alertInfo}
        onClose={handleClose}
        TransitionComponent={TransitionSlide}
        message={"Qualquer dúvida pode  me chamar nas minhas redes sociais..."}
        action={
          <IconButton
            size="small"
            aria-label="fechar"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
      <C.SeparatorImgDown>
        <img src={Separator} />
      </C.SeparatorImgDown>
    </C.Container>
  );
};

export default About;
