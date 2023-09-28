import * as C from "./ImagePerfil.styled";
import DevImage from "../../assets/Images/DevPerfil.svg";
import DevImagee from "../../assets/Images/perfilImg.svg";

//import "./styles.css";

const ImagePerfil = () => {
  return (
    <C.DivImage>
      <C.ImgPerfil
        className="image-perfil"
        src={DevImage}
        alt="Imagem de perfil do usuário"
      ></C.ImgPerfil>
    </C.DivImage>
  );
};

export default ImagePerfil;
