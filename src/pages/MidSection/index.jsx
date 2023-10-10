import ButtonReadMore from "../../components/buttonReadMore";
import * as C from "./MidSection.styled";

const MidSection = () => {
  const textParagraph =
    "Bacharel em Engenharia de Software pela Universidade Federal do Ceará, atualmente estou buscando novas oportunidades no campo do desenvolvimento. Com 2 experiências solidas de Full-Stack e Front-End e usando as melhores práticas de design e desenvolvimento creio que posso me tornar o melhor no que faço.";

  const handleButton = () => {
    window.open("https://www.linkedin.com/in/kennedy-cordeiro-b05186198/");
  };

  return (
    <C.Container className="midSection">
      <C.Title>Um pouco sobre mim</C.Title>
      <C.Paragraph> {textParagraph}</C.Paragraph>
      <C.DivButton>
        {" "}
        <ButtonReadMore onClickButton={handleButton} Text="Saiba mais" />
      </C.DivButton>
    </C.Container>
  );
};

export default MidSection;
