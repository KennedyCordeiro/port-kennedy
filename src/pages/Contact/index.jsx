import * as C from "./Contact.styled";
import { useState } from "react";
import NavIcons from "../../components/navIcons";
import TextField from "@mui/material/TextField";
import InputStyled from "../../components/InputStyled";
import ButtonMessage from "../../components/buttonMessage";
import emailJs from "@emailjs/browser";
import Loader from "../../components/loader";

const Contact = () => {
  const [translate, setTranslate] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const sendMessage = (e) => {
    e.preventDefault();
    setLoader(true);

    if (name === "" || message === "" || email === "") {
      alert("Preencha todos os campos");
      setLoader(false);
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailJs
      .send(
        "service_v7ak6ea",
        "template_lczbo9j",
        templateParams,
        "dUHo--g76bzkfLjdk"
      )
      .then(
        (response) => {
          console.log(
            "Email enviado com sucesso",
            response.status,
            response.text
          );
          alert("Email enviado com sucesso");
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("Erro:", err);
        }
      );
    setLoader(false);
  };

  return (
    <C.Container>
      <C.Column1 />
      <C.Column>
        <C.TitleDiv>{"Contatos"}</C.TitleDiv>
        <C.Paragraph>
          {
            "Vamos conversar! Aqui estão meus contatos e redes sociais, estou disponível para trabalhar!"
          }
        </C.Paragraph>
        <span>Digite seu Email</span>
        <InputStyled
          label="Email"
          placeholder="Insira seu email"
          value={email}
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
          width={"width-70"}
        />
        <span>Digite seu nome</span>
        <InputStyled
          placeholder="Insira seu nome"
          label="Nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
          type={"text"}
        />

        <span>Digite agora sua mensagem</span>
        <InputStyled
          placeholder="Insira sua mensagem"
          label="Mensagem"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          type={"text"}
          overrated={true}
        />
        <ButtonMessage Onclick={sendMessage} Text={"Enviar mensagem"} />
        <C.DivIcons>
          <NavIcons selectedIcon={"linkedin"} />
          <NavIcons selectedIcon={"instagram"} />
          <NavIcons selectedIcon={"github"} />
        </C.DivIcons>
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
