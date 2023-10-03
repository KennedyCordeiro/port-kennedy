import { useState } from "react";
import * as C from "./About.styled";
import Widgets from "../../components/widgets";
import { Snackbar } from "@mui/material";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const About = () => {
  const [alertInfo, setAlertInfo] = useState(false);
  const [activeSection, setActiveSection] = useState("About");
  const sections = [
    { nameSection: "< Sobre mim />", title: "About" },
    { nameSection: "< Carreira />", title: "Career" },
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

  return (
    <C.Container>
      <C.DivTitle>
        <C.Title onClick={handleInfo}>About</C.Title>
        {/* <C.Subtitle onClick={handleInfo}>
          -------------------| |-------------------
        </C.Subtitle> */}
      </C.DivTitle>
      <C.MidSection>
        <C.SectionOptions>
          <C.BorderedSection style={{ marginBottom: "30px" }} />
          {sections.map((item, index) => (
            <C.SectionOption
              key={index}
              onClick={() =>
                console.log(item.title) && setActiveSection(item.title)
              }
            >
              {" "}
              {item.nameSection}
            </C.SectionOption>
          ))}
        </C.SectionOptions>
        <C.Column>
          <C.BorderedSection />
          {activeSection === "About" && (
            <>
              <C.TitleSection>Carreira</C.TitleSection>
              {/* <C.Paragraph>
                Olá! Sou um Engenheiro de Software apaixonado por criar soluções
                inovadoras e escaláveis no mundo do desenvolvimento de software.
                Com experiência tanto como Full Stack Developer quanto como
                Desenvolvedor Front-End, meu objetivo principal é fornecer aos
                usuários experiências excepcionais por meio de interfaces
                intuitivas e atraentes. Acredito que a usabilidade é fundamental
                para o sucesso de qualquer aplicativo ou site. Na área de
                Front-End, domino tecnologias como React-JS, Redux-JS, Node-JS,
                TypeScript, Sass, HTML, CSS e JavaScript. Sempre me esforço para
                criar interfaces que não apenas funcionem bem, mas também sejam
                visualmente atraentes e envolventes.
              </C.Paragraph>
              <C.Paragraph>
                No Back-End, minha experiência se estende a ASP.NET, C#,
                JavaScript e .NET Framework. Sigo ativamente os padrões de Clean
                Code e SOLID para garantir que o código seja de alta qualidade e
                fácil de manter. Acredito que um código bem escrito é a base de
                qualquer projeto sólido. Estou constantemente aprimorando minhas
                habilidades técnicas e acompanhando as últimas tendências do
                setor. Sou altamente motivado, colaborativo e capaz de trabalhar
                tanto de forma independente quanto em equipe.
              </C.Paragraph>
              <C.Paragraph>
                Se você está procurando um profissional comprometido e
                apaixonado pelo desenvolvimento de software, alguém que está
                sempre buscando a excelência, adoraria conversar com você e
                explorar possíveis oportunidades de trabalho juntos. Vamos
                construir algo incrível juntos!
              </C.Paragraph> */}
            </>
          )}
        </C.Column>
      </C.MidSection>
      <Snackbar
        open={alertInfo}
        onClose={handleClose}
        TransitionComponent={TransitionSlide}
        message={"Qualquer dúvida é só me chamar nas minhas redes sociais..."}
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
    </C.Container>
  );
};

export default About;
