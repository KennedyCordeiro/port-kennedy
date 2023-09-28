//import Back from "../../assets/Images/Rectangle.svg";
import Back from "../../assets/Images/background/Rblack.svg";
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
    padding-bottom: 20px;
  }

  @media screen and (max-width: 600px) {
    align-items: center;
    background-size: 150% auto;
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
export const NavbarContainer = styled.div`
  align-items: center;
  height: 10%;
  width: 100%;
  justify-content: end;
  position: fixed;
  padding-right: 40px;
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
`;

export const NavIconsDiv = styled.div`
  display: flex;
  margin-top: 10px;
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
