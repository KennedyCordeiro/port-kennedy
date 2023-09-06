import GithubButton from "../../components/gitHubButton";
import * as C from "./Contact.styled";
import { useState } from "react";

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
      <C.TitleDiv>Contact</C.TitleDiv>
      <C.MidSection>
        <C.Paragraph>{getText()}</C.Paragraph>
        <C.AddressDiv>
          <ul>
            <li>Brasil</li>
            <li>Ceará 088</li>
            <li>kennedy.engsoftware@gmail.com</li>
          </ul>
          <GithubButton></GithubButton>
        </C.AddressDiv>
      </C.MidSection>
    </C.Container>
  );
};

export default Contact;
