import styled from "styled-components";
import Back from "../../assets/Images/background/ReInvert.svg";

export const Container = styled.div`
  width: 100%;
  height: 100vh; /* Altere a altura para 100vh para cobrir toda a altura da página */
  display: flex;
  justify-content: space-between;
  background-color: #d7d7d7;
  background-image: url(${Back});
  background-position: left;
  background-repeat: no-repeat;
  background-origin: initial;
  background-size: 70% auto;
  flex-direction: column;
  align-items: center;
  animation: fadeIn 0.7s ease-in-out;
  padding-bottom: 10px;
  @media screen and (max-width: 900px) {
    align-items: center;
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

export const DivTitle = styled.div`
  width: 500px;
  border: 1px solid;
  margin: 20px 0 40px 0;
  border-color: #3b3b3b;
  border-radius: 20% 0 20% 0;
  align-items: center;
  display: flex;
  justify-content: center;
  font-family: "Joker One", sans-serif;
  font-weight: bold;
  color: #3b3b3b;
  &:hover {
    background-color: #3b3b3b;
    color: #d7d7d7;
    border-color: #d7d7d7;
    transition: 0.5s ease-in-out;
  }
`;

export const Title = styled.p`
  font-size: 70px;
  margin-bottom: 10px;
  display: flex;
  margin-top: 10px;
`;

export const WidgetDIv = styled.div`
  background-color: red;
`;
