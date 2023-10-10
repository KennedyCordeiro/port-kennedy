import * as C from "./Contact.styled";
import { useState } from "react";
import NavIcons from "../../components/navIcons";
import InputStyled from "../../components/InputStyled";
import ButtonMessage from "../../components/buttonMessage";
import emailJs from "@emailjs/browser";
import Loader from "../../components/loader";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const getAlert = () => {
    if (!successMessage) {
      return (
        <Alert onClose={handleCloseAlert} severity="error">
          Preencha todos os campos!
        </Alert>
      );
    }
    return (
      <Alert onClose={handleCloseAlert} severity="success">
        Email enviado com sucesso
      </Alert>
    );
  };

  const sendMessage = (e) => {
    e.preventDefault();
    setLoader(true);

    if (name === "" || message === "" || email === "") {
      setLoader(false);
      setOpenAlert(true);
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
          setName("");
          setEmail("");
          setMessage("");
          setOpenAlert(true);
          setSuccessMessage(true);
          setTimeout(() => {
            setSuccessMessage(false), setOpenAlert(false), setLoader(false);
          }, 5000);
        },
        (err) => {
          console.log("Erro:", err);
          setOpenAlert(true);
          setLoader(false);
        }
      );
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  return (
    <C.Container>
      {loader && (
        <C.LoaderDiv>
          <Loader></Loader>
        </C.LoaderDiv>
      )}
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
        <Snackbar
          open={openAlert}
          autoHideDuration={6000}
          onClose={handleCloseAlert}
        >
          {getAlert()}
        </Snackbar>

        <C.DivIcons>
          <NavIcons selectedIcon={"linkedin"} />
          <NavIcons selectedIcon={"instagram"} />
          <NavIcons selectedIcon={"github"} />
        </C.DivIcons>
      </C.Column>
    </C.Container>
  );
};

export default Contact;
