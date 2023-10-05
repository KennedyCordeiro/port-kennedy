import * as C from "./ImagePerfil.styled";
import DevImage from "../../../public/Images/DevPerfil.svg";

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
