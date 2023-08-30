import NavbarFixed from "../../components/navbarFixed";
import Header from "../../components/header/";
import * as C from "./Home.styled";
import NavIcons from "../../components/navIcons";
import ImagePerfil from "../../components/ImagePerfil";
import ButtonCur from "../../components/buttonCur";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
const Home = () => {
  const DownloadCurriculum = () => {
    const curriculumUrl =
      "https://drive.google.com/file/d/1sA-EszQLafy3JY5d13hfT1aG-g-VRBe1/view?usp=drive_link";
    window.open(curriculumUrl, "_blank");
  };

  return (
    <>
      <Navbar bg="transparent" expand="lg">
        <Container>
          <C.Container>
            <C.NavbarContainer></C.NavbarContainer>
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
        </Container>
      </Navbar>
    </>
  );
};

export default Home;
