import * as C from "./Contact.styled";
import { useState } from "react";
import LocationIcon from "../../assets/Images/location.svg";

const Contact = () => {
  const [translate, setTranslate] = useState(false);
  const getText = () => {
    if (!translate) {
      return (
        <h2>
          Vamos conversar! Aqui estão meus contatos e redes sociais, estou
          dísponivel para trabalhar !
        </h2>
      );
    } else
      return (
        <p>
          Let&apos talk! Here are my contacts and social media, I\'m available
          to work!
        </p>
      );
  };
  return (
    <C.Container>
      <C.MidSection>
        {" "}
        <C.TitleDiv>Contact</C.TitleDiv>
      </C.MidSection>
    </C.Container>
  );
};

export default Contact;
