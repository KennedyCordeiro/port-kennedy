import Navbar from "../../components/navbar/";
import Header from "../../components/header/";
import * as C from "./Home.styled";
import NavIcons from "../../components/navIcons";
import ImagePerfil from "../../components/ImagePerfil";
import ButtonCur from "../../components/buttonCur";
const Home = () => {
  const DownloadCurriculum = () => {
    const curriculumUrl =
      "https://drive.google.com/file/d/1sA-EszQLafy3JY5d13hfT1aG-g-VRBe1/view?usp=drive_link";
    window.open(curriculumUrl, "_blank");
  };

  return (
    <C.Container>
      <C.NavbarContainer>
        <Navbar></Navbar>
      </C.NavbarContainer>
      <C.Column />

      <C.Column>
        <C.MidSection>
          <ImagePerfil></ImagePerfil>
          <C.Itens>
            <Header></Header>
          </C.Itens>
          <NavIcons></NavIcons>
          <ButtonCur
            onClickButton={DownloadCurriculum}
            text="Acessar Curriculo"
          ></ButtonCur>
        </C.MidSection>
      </C.Column>
    </C.Container>
  );
};

export default Home;
