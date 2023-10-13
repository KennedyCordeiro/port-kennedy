import { useState, useEffect } from "react";
import * as C from "./About.styled";
import { Snackbar } from "@mui/material";
import Slide from "@mui/material/Slide";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Line from "../../assets/Images/Line.svg";
import Separator from "../../assets/Images/separator.svg";
import MenuClose from "../../components/menuClose";

const About = () => {
  const [alertInfo, setAlertInfo] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const icons = [
    {
      sectionIcon: C.Icon1,
      title: "Desenvolvedor Full-Stack Fitbank 450",
      titleSection: C.DivTitleIcon1,
      skills: [
        "Swagger API",
        "Princípios SOLID",
        "Scrum",
        "PostgreSQL",
        "Redux.js",
        "Node.js",
        "TypeScript",
        "Javascript",
        "SASS",
        "Bibliotecas JavaScript",
        "HTML5",
        "ASP.NET",
        "Azure DevOps",
        "SQL",
        "React.js",
        ".NET Framework",
        "C#",
        "CSS3",
        "Bootstrap",
        "Clean Code in Solid",
        "Microsoft SQL Server",
        "Experiência do usuário (UX)",
        "Design de experiência do usuário (UX)",
      ],
      topic: "skill3",
      description:
        "Desenvolvedor Full Stack com experiência em desenvolvimento de aplicações Back-end e integração de aplicações Back-End. Conhecimento em C#, .NET framework, Solid Clean Code, contato Azure DevOps e banco de dados com Microsoft SQL Server & PostgreSQL. Experiência em metodologias ageis como Scrum. Desenvolvimento de aplicações Front-end da empresa usando React-JS, TypeScript e Javascript. Estilização de aplicações com styled components, Css e Sass. Prototipação com Figma.",
    },
    {
      sectionIcon: C.Icon2,
      title: "Engenheiro de Software - UFC",
      titleSection: C.DivTitleIcon2,
      topic: "skill2",
      description:
        "Formado pela Universidade Federal do Ceará(UFC) no Curso de Engenharia de Software, desde cedo consegui aplicar meus conhecimentos dentro e fora da universidade aplicando processos de Scrum e de melhorias de gestão em minha própria empresa e também em minha vida pessoal",
      skills: [
        "Scrum",
        "Software Engineer",
        "Web Development",
        "Agile Development",
        "Kanban",
        "UX/UI Interface",
        "Design UX",
        "Product Design",
        "Software architecture ",
      ],
    },
    {
      sectionIcon: C.Icon3,
      title: "Desenvolvedor Front-End Squadra Digital",
      titleSection: C.DivTitleIcon3,

      skills: [
        "Desenvolvimento Front-End",
        "Manutenção de Sistemas Legados",
        "Evolução de Aplicações",
        "Suporte Técnico",
        "ASP.NET",
        ".NET Framework",
        "React-JS",
        "JavaScript",
        "Análise UX/UI",
        "Deploy de Aplicações",
        "Kubernetes",
        "Azure DevOps",
        "Integração Back-End",
        "C#",
        "Redux",
        "Node-JS",
        "Web Design",
        "jQuery",
        "Solid Clean Code",
        "Contato com Azure DevOps",
        "DevOps",
        "Microsoft SQL Server",
        "MongoDB",
        "Metodologias Ágeis (Scrum)",
        "Documentação de API",
        "Versionamento com Git/Github",
      ],
      topic: "skill4",
      description:
        "Minha jornada profissional na Squadra Digital é marcada por uma ampla gama de experiências em desenvolvimento Full-Stack. Trabalhei com dedicação na manutenção e evolução de sistemas legados, garantindo que eles continuassem funcionando de maneira eficiente e construindo novas funcionalidades para os usuários. Também tive a oportunidade de desenvolver novas funcionalidades, sempre com um olhar atento à experiência do usuário (UX/UI) e aplicando as melhores práticas de desenvolvimento.\n\nAlém disso, participei ativamente de processos de deploy de aplicações e implementação de melhorias, aproveitando tecnologias avançadas como Kubernetes e Azure DevOps para garantir uma entrega contínua e eficaz. Minhas habilidades incluem a integração com aplicações Back-End, o uso de linguagens como C#, Redux, Node-JS e React-JS, JQuery, HTML5, CSS3, bem como a aplicação de princípios de desenvolvimento sólido e limpo (Solid Clean Code).\n\nAo longo dessa jornada, também acumulei experiência como analista de DevOps, trabalhando com Azure DevOps Server e colaborando com bancos de dados Microsoft SQL Server e MongoDB. Minha abordagem é guiada por metodologias ágeis, como o Scrum, que promovem entregas eficientes e ágeis. Além disso, estou familiarizado com a documentação de API usando Swagger e o versionamento de código com Git/Github.",
    },

    {
      sectionIcon: C.Icon4,
      title: "Freelancer",
      titleSection: C.DivTitleIcon4,
      topic: "skill5",
      description:
        "Como Freelancer foquei bastante em aprender novas tecnologias e me alinhar mais com as dependências do mercado, novas skills foram adquiridas e aprimoradas como Vue, Next-JS, Java com spring boot e Angulas",
      skills: ["Vue-JS", "Next-JS", "Java", "Spring Boot", "Typescript"],
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

  const handleIcon = (section) => {
    console.log(section.title);
    setActiveSection(section);
  };

  const handleCloseSection = () => {
    setActiveSection("");
  };

  return (
    <C.Container>
      <C.DivTitle>
        <C.Title onClick={handleInfo}>About</C.Title>
      </C.DivTitle>
      <C.SeparatorImg src={Separator} />
      <C.AboutSection>
        <C.SectionSummary>
          <C.TittleSummary style={{ textAlign: "initial" }}>
            Experiência
          </C.TittleSummary>
          <C.TextSummary>
            {" "}
            Com duas experiências sólidas em desenvolvimento Full Stack e como
            desenvolvedor Front-End busco estar sempre acompanhando as melhores
            tecnologias do mercado para aplicar em meus projetos, e com isso me
            tornar um profissional cada vez melhor.{" "}
          </C.TextSummary>
        </C.SectionSummary>
        <C.LineSeparator src={Line} className="Line" />
        <C.SectionSummary>
          {!activeSection &&
            icons.map((icon, index) => (
              <div key={index} className={`icon-section-hidden icon-${index}`}>
                <icon.sectionIcon onClick={() => handleIcon(icon)} />
                <icon.titleSection onClick={() => handleIcon(icon)}>
                  {icon.title}
                </icon.titleSection>
              </div>
            ))}

          {activeSection && (
            <>
              <C.TittleSummaryActive>
                {activeSection.title}
                <MenuClose HandleMenu={handleCloseSection} />
              </C.TittleSummaryActive>
              <C.TextDescription>{activeSection.description}</C.TextDescription>
              <C.DivSkills>
                {activeSection.skills &&
                  activeSection.skills.map((skill, index) => (
                    <C.Skill key={index} className={activeSection.topic}>
                      {skill}
                    </C.Skill>
                  ))}
              </C.DivSkills>
            </>
          )}

          <C.MobileContent>
            {icons.map((icon, index) => (
              <div key={index} className={`icon-section-hidden icon-${index}`}>
                <icon.sectionIcon onClick={() => handleIcon(icon)} />
                <icon.titleSection onClick={() => handleIcon(icon)}>
                  {icon.title}
                </icon.titleSection>
              </div>
            ))}
          </C.MobileContent>
        </C.SectionSummary>
      </C.AboutSection>

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
