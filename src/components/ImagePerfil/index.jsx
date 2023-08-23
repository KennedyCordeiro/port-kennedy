import * as C from "./ImagePerfil.styled";
import DevImage from "../../assets/Images/DevPerfil.jpg";
import "./styles.css";

const ImagePerfil = () => {
  return (
    <C.DivImage>
      <img
        className="image-perfil"
        src={DevImage}
        alt="Imagem de perfil do usuário"
      ></img>
    </C.DivImage>
  );
};

export default ImagePerfil;
