import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  font-family: "Joker One", sans-serif;
  /*  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  background-color: #252333ff;

  align-items: center;

  @media screen and (max-width: 900px) {
    height: 96vh;
  }
`;

export const TitleDiv = styled.div`
  font-size: 60px;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  background: #35006d;
`;

export const MidSection = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  border-radius: 10px;
  margin-bottom: 20px;
  align-items: center;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
export const TitleLabel = styled.span`
  margin-top: "10px";
`;
export const AddressDiv = styled.div`
  display: flex;
  width: 50%;
  font-size: 25px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  grid-template-columns: 200px 200px;
`;

export const Paragraph = styled.div`
  display: flex;
  font-size: 17px;
  font-style: normal;
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: center;
  padding-left: 3px;
  font-family: "Euclid Circular A", "Poppins";
`;

export const Column = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  position: relative;
  align-items: center;
  font-size: 20px;
  justify-content: flex-start;
  height: 100%;

  //padding-left: 100px;
`;

export const Column1 = styled.div`
  flex-grow: 0;
  width: 450px;
  display: flex;
  position: relative;
  height: 100%;
  align-items: baseline;
  background-size: cover;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const DivIcons = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  position: absolute;
  top: 37%;
  margin-right: 20px;
  left: 90%;
  align-items: center;
  @media screen and (max-width: 900px) {
    top: auto;
    left: auto;
    flex-direction: row;
    position: relative;
    width: auto;
    padding-bottom: 0;
    margin-top: 30px;
    margin-right: 0;
  }
`;

export const LoaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed; /* Alterado para posição fixa */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  opacity: 1;
  background-color: rgba(
    39,
    39,
    39,
    0.6
  ); /* Alterado o valor de alpha para um efeito de fundo mais suave */
  backdrop-filter: blur(20px);
  animation: showMenu 0.5s ease-in-out;

  @keyframes showMenu {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }
`;
