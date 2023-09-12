import * as C from "./Contact.styled";
import { useState } from "react";
import LocationIcon from "../../assets/Images/location.svg";
// import Squircley from "../../assets/Squircley.svg";
import NavIcons from "../../components/navIcons";
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

  return (
    <C.Container>
      <C.TitleDiv>{getTitle()}</C.TitleDiv>
      <C.Paragraph>{getText()}</C.Paragraph>
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
    </C.Container>
  );
};

export default Contact;
