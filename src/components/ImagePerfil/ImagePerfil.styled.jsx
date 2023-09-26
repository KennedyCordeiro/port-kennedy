import { styled } from "styled-components";

export const DivImage = styled.div`
  margin-bottom: 30px;
`;

export const ImgPerfil = styled.img`
  width: 700px;
  height: 900px;
  max-width: 100%;
  object-fit: cover;
  margin-bottom: 100px;
  border-radius: 10% 0 0 10%;
  object-position: bottom;
  @media screen and (max-width: 1200px) {
    width: 500px;
    height: 600px;
  }
`;
