import { styled } from "styled-components";

export const DivImage = styled.div``;

export const ImgPerfil = styled.img`
  max-width: 600px;
  height: auto;
  object-fit: cover;
  margin-bottom: 100px;
  border-radius: 10% 0 0 10%;
  object-position: center;

  &:hover {
    transform: scale(1.04);
    transition: 0.5s ease-in-out;
  }
  @media screen and (max-width: 1600px) {
    max-width: 500px;
    max-height: auto;
  }
`;
