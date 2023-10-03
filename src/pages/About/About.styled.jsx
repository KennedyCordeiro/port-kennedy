import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh; /* Altere a altura para 100vh para cobrir toda a altura da página */
  display: flex;
  position: relative;
  justify-content: space-between;
  background-color: #d7d7d7;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  animation: fadeIn 0.7s ease-in-out;
  padding-bottom: 10px;
  box-shadow: 18px 18px 36px #929292, 8px 8px 36px #838383;
  @media screen and (max-width: 900px) {
    align-items: center;
    padding-bottom: 20px;
    height: 120vh;
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

export const SeparatorImg = styled.img`
  margin-top: -10px;
`;

export const SeparatorImgDown = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 95%;
`;

export const LineSeparator = styled.img`
  position: absolute;
  left: 50%;
  top: 54%;
  object-fit: contain;
  transform: translate(-50%, -50%);
  height: 42rem;
  width: 100%;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: #282b3c;
  position: absolute;
  left: 49%;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #4d5374;
    transform: scale(100%);
    transition: 0.3s ease-in-out;
  }
`;

export const Icon1 = styled(Icon)`
  top: 20%;
`;

export const Icon2 = styled(Icon)`
  top: 35%;
`;

export const Icon3 = styled(Icon)`
  top: 50%;
`;

export const Icon4 = styled(Icon)`
  top: 65%;
`;

export const Icon5 = styled(Icon)`
  top: 80%;
`;

export const Icon6 = styled(Icon)`
  top: 95%;
`;

export const DivTitleIcon = styled.div`
  font-family: Montserrat, sans-serif;
  left: 55%;
  color: #3b3b3b;
  font-weight: normal;
  font-size: 1.55rem;
  display: flex;
  position: absolute;
`;

export const DivTitleIcon1 = styled(DivTitleIcon)`
  top: 20%;
`;
export const DivTitleIcon2 = styled(DivTitleIcon)`
  top: 35%;
`;
export const DivTitleIcon3 = styled(DivTitleIcon)`
  top: 50%;
`;
export const DivTitleIcon4 = styled(DivTitleIcon)`
  top: 65%;
`;
export const DivTitleIcon5 = styled(DivTitleIcon)`
  top: 80%;
`;
export const DivTitleIcon6 = styled(DivTitleIcon)`
  top: 95%;
`;
