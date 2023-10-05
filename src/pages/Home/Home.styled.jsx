//import Back from "../../assets/Images/Rectangle.svg";
import Back from "../../../public/Images/background/Rblack.svg";
import BackMobile from "../../../public/Images/background/BackMobile.svg";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh; /* Altere a altura para 100vh para cobrir toda a altura da página */
  display: flex;
  justify-content: space-between;
  background-color: #d7d7d7;
  background-image: url(${Back});
  background-position: right;
  background-repeat: no-repeat;
  background-origin: initial;
  background-size: 60% auto;
  object-fit: cover;
  flex-direction: column;
  align-items: end;
  animation: fadeIn 0.7s ease-in-out;
  padding-bottom: 10px;

  @media screen and (max-width: 900px) {
    align-items: center;
    background-size: 108% auto;
    background-position: center;
    padding-bottom: 20px;
  }

  @media screen and (max-width: 600px) {
    align-items: center;
    background-image: url(${BackMobile});
    background-size: 460% auto;
    padding-bottom: 20px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Column = styled.div`
  flex: 1;
  position: relative;
  justify-content: center;
`;

export const MidSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 140px;
  padding-bottom: 5em;

  @media screen and (max-width: 900px) {
    margin-right: 0px;
  }
`;

export const Itens = styled.div`
  display: flex;
  position: absolute;
  top: 40%;
  left: 5%;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    top: 30%;
    width: 100%;
    left: 0%;
    align-items: center;
  }
`;

export const NavIconsDiv = styled.div`
  display: flex;
  margin-top: 10px;
  width: fit-content;
`;

export const ImagePerfilDiv = styled.div`
  margin-top: 14em;
  @media screen and (max-width: 900px) {
    display: none;
  }

  @media screen and (max-width: 1600px) {
    margin-top: 8em;
  }
`;
