import Header from "../../components/header/";
import * as C from "./Home.styled";
import NavIcons from "../../components/navIcons";
import ImagePerfil from "../../components/ImagePerfil";
import ButtonCur from "../../components/buttonCur";

const Home = () => {
  const DownloadCurriculum = () => {
    const curriculumUrl =
      "https://drive.google.com/file/d/1sA-EszQLafy3JY5d13hfT1aG-g-VRBe1/view?usp=sharing";
    window.open(curriculumUrl, "_blank");
  };

  return (
    <>
      <C.Container>
        <C.MidSection>
          <C.ImagePerfilDiv>
            <ImagePerfil></ImagePerfil>
          </C.ImagePerfilDiv>
          <C.Itens>
            <Header></Header>
            <ButtonCur onClickButton={DownloadCurriculum} text="Acessar CV" />
            <C.NavIconsDiv>
              <NavIcons></NavIcons>
            </C.NavIconsDiv>
          </C.Itens>
        </C.MidSection>
      </C.Container>
    </>
  );
};

export default Home;
