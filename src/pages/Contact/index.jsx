import * as C from "./Contact.styled";
import { useState } from "react";
import NavIcons from "../../components/navIcons";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const Contact = () => {
  const [translate, setTranslate] = useState(false);

  const getText = () =>
    !translate
      ? "Vamos conversar! Aqui estão meus contatos e redes sociais, estou disponível para trabalhar!"
      : "Let's talk! Here are my contacts and social media, I'm available to work!";

  const getTitle = () => (translate ? "Contacts" : "Contatos");

  const handleTranslate = () => {
    setTranslate(!translate);
  };

  const MyStyledTextField = styled(TextField)({
    backgroundColor: "transparent",
    marginTop: "10px",
    width: "50%",
    color: "#ffffff",
    "& .MuiInputLabel-root": {
      color: "#ffffff",
    },
    "& .MuiInput-root": {
      color: "#ffffff",
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ffffff",
    },
  });

  return (
    <C.Container>
      <C.Column1></C.Column1>
      <C.Column>
        <C.TitleDiv>{getTitle()}</C.TitleDiv>
        <C.Paragraph>{getText()}</C.Paragraph>
        <MyStyledTextField label="Seu Nome" variant="outlined" />
      </C.Column>

      {/* 
      <C.MidSection>
        <C.Column>
          {" "}
          <NavIcons selectedIcon={"github"} />
          https://github.com/KennedyCordeiro/
        </C.Column>
        <C.Column>
          <NavIcons selectedIcon={"linkedin"} />
          https://www.linkedin.com/in/kennedy-cordeiro-b05186198/
        </C.Column>
      </C.MidSection>
      <C.MidSection>
        <C.Column>
          <NavIcons selectedIcon={"email"} style={{ flex: "1" }} />
          kennedy.engsoftware@gmail.com {"    "}
        </C.Column>
        <C.Column>
          <NavIcons selectedIcon={"linkedin"} />
          https://www.linkedin.com/in/kennedy-cordeiro-b05186198/
        </C.Column>
      </C.MidSection> */}
    </C.Container>
  );
};

export default Contact;
