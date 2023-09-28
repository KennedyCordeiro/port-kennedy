import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto; /* Altere a altura para 100vh para cobrir toda a altura da página */
  display: flex;
  justify-content: space-between;
  background-color: #d7d7d7;
  background-size: 70% auto;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  animation: fadeIn 0.7s ease-in-out;
  padding-bottom: 10px;
  border-top: 1.5px solid #3b3b3b;
  overflow-x: visible;
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
export const MidSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  font-family: Raleway, sans-serif;
`;

export const DivTitle = styled.div`
  width: 500px;
  height: 105px;
  margin: 20px 0 40px 0;
  border: 1px solid;
  border-radius: 20% 0 20% 0;
  border-color: #3b3b3b;
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: center;
  font-family: "Joker One", sans-serif;
  font-weight: bold;
  color: #3b3b3b;
  cursor: pointer;
  &:hover {
    background-color: #3b3b3b;
    color: #d7d7d7;
    border-color: #d7d7d7;
    transition: 0.5s ease-in-out;
  }
`;

export const Title = styled.p`
  font-size: 70px;
  margin-bottom: 0px;
  display: flex;
  margin-top: 10px;
`;

export const Subtitle = styled.span`
  font-size: 15px;
  margin-top: -20px;
  margin-bottom: 10px;
`;

export const WidgetDIv = styled.div`
  background-color: red;
`;

export const Column = styled.div`
  flex-wrap: wrap;
  flex-direction: column;
  flex: 1;
  display: flex;
  align-items: center;
  color: #3b3b3b;
  font-weight: bold;

  @media screen and (max-width: 900px) {
    font-size: 15px;
  }
  //width: 60%;
`;

export const Paragraph = styled.p`
  font-size: 0.9vw;
  columns: 200px 2;
  column-gap: 30px;
  padding: 25px;
`;

export const BorderedSection = styled.div`
  border-top: 2px solid #3b3b3b;
  width: 60%;
  margin: 0 auto;
  padding-bottom: 0px;
  display: flex;
`;

export const SectionOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #3b3b3b;
  justify-content: center;
  font-weight: bold;
  flex: 1;
  & > ${BorderedSection} {
    justify-self: flex-start;
    display: grid;
  }
`;

export const SectionOption = styled.div`
  background-color: red;
  width: 100%;
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1.4px solid #3b3b3b;
  margin: 10px;
  // border-radius: 30px;
  background: lightgrey;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 50px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 26px -18px inset;
`;
