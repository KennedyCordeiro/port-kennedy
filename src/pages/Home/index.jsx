import Navbar from "../../components/navbar/";
import Header from "../../components/header/";
import * as C from "./Home.styled";

const Home = () => {
  return (
    <C.Container>
      <C.NavbarContainer>
        <Navbar></Navbar>
      </C.NavbarContainer>

      <C.NavIcons> </C.NavIcons>
      <Header></Header>
    </C.Container>
  );
};

export default Home;
