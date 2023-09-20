import * as C from "./Contact.styled";
import { useState } from "react";
import NavIcons from "../../components/navIcons";
import TextField from "@mui/material/TextField";
import InputStyled from "../../components/InputStyled";
import TestInput from "../../components/testInput";
import ButtonMessage from "../../components/buttonMessage";

const Contact = () => {
  const [translate, setTranslate] = useState(false);
  const [email, setEmail] = useState("");
  const [textMail, setTextMail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const getText = () =>
    !translate
      ? "Vamos conversar! Aqui estão meus contatos e redes sociais, estou disponível para trabalhar!"
      : "Let's talk! Here are my contacts and social media, I'm available to work!";

  const getTitle = () => (translate ? "Contacts" : "Contatos");

  const handleTranslate = () => {
    setTranslate(!translate);
  };

  const sendMessage = () => {
    console.log("enviado");
  };

  return (
    <C.Container>
      <C.Column1></C.Column1>
      <C.Column>
        <C.TitleDiv>{getTitle()}</C.TitleDiv>
        <C.Paragraph>{getText()}</C.Paragraph>
        <span>Digite seu Email</span>
        <TestInput
          label="Email"
          placeholder="Insira seu email"
          value={email}
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
          width={"width-70"}
        />
        <span>Digite seu nome</span>
        <TestInput
          placeholder="Insira seu nome"
          label="Nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
          type={"text"}
        />

        <span>Digite agora sua mensagem</span>
        <TestInput
          placeholder="Insira sua mensagem"
          label="Mensagem"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          type={"text"}
          overrated={true}
        />

        <ButtonMessage Onclick={sendMessage} Text={"Enviar mensagem"} />
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
