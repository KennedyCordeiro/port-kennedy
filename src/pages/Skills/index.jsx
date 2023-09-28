import IconsCarousel from "../../components/iconsCarousel";
import * as C from "./Skills.styled";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Skills = () => {
  const [alertInfo, setAlertInfo] = useState(false);

  const TransitionSlide = (props) => {
    return <Slide {...props} direction="right" />;
  };

  const handleInfo = () => {
    setAlertInfo(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlertInfo(false);
  };

  return (
    <C.DivSkills>
      <C.DivTitle>
        <C.Title onClick={handleInfo}> Skills</C.Title>
      </C.DivTitle>
      <IconsCarousel></IconsCarousel>
      <Snackbar
        open={alertInfo}
        autoHideDuration={4000}
        onClose={handleClose}
        TransitionComponent={TransitionSlide}
        message={"Novas Skills em desenvolvimento !"}
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
      ></Snackbar>
    </C.DivSkills>
  );
};

export default Skills;
