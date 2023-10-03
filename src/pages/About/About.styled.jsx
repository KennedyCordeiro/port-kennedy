import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh; /* Altere a altura para 100vh para cobrir toda a altura da página */
  display: flex;
  justify-content: space-between;
  background-color: #d7d7d7;
  background-size: 70% auto;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  animation: fadeIn 0.7s ease-in-out;
  padding-bottom: 10px;
  box-shadow: 18px 18px 36px #929292, 8px 8px 36px #838383;
  @media screen and (max-width: 900px) {
    align-items: center;
    padding-bottom: 20px;
    height: auto;
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
  @media screen and (max-width: 900px) {
    width: 200px;
    height: 80px;
  }
`;

export const Title = styled.p`
  font-size: 70px;
  margin-bottom: 10px;
  display: flex;
  margin-top: 10px;

  @media screen and (max-width: 900px) {
    font-size: 50px;
  }
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
`;

export const Paragraph = styled.p`
  font-size: 0.9vw;
  columns: 200px 2;
  column-gap: 30px;
  padding: 25px;

  @media screen and (max-width: 900px) {
    font-size: 15px;
  }
`;

export const TitleSection = styled.h4`
  margin-top: 10px;
  font-size: 20px;
  margin-bottom: 0px;
`;

export const BorderedSection = styled.div`
  border-top: 2px solid #3b3b3b;
  width: 60%;
  margin-top: 0;
  padding-bottom: 0px;
  display: flex;
`;

export const SectionOptions = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  color: #3b3b3b;
  font-weight: bold;
  flex: 1;
  & > ${BorderedSection} {
    //   justify-self: flex-start;
  }
`;

export const SectionOption = styled.div`
  background-color: red;
  width: 60%;
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1.4px solid #3b3b3b;
  border-top: 1px solid #3b3b3b;
  margin: 10px;
  font-size: 20px;
  cursor: pointer;
  // border-radius: 30px;
  background: lightgrey;
`;
