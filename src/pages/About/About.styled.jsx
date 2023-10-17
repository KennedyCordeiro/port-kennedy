import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  overflow: auto;
  overflow-y: hidden;
  position: relative;
  justify-content: space-between;
  background-color: #d7d7d7;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  animation: fadeIn 0.6s ease-in-out;
  padding-bottom: 10px;
  box-shadow: 18px 18px 36px #929292, 8px 8px 36px #838383;
  @media screen and (max-width: 900px) {
    align-items: center;
    padding-bottom: 20px;
  }
  @media screen and (max-width: 1600px) {
    min-height: 110vh;
    //    background-color: red;
  }

  @media screen and (max-width: 600px) {
    align-items: center;
    padding-bottom: 20px;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const DivTitle = styled.div`
  width: 500px;
  height: 80px;
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
    height: 60px;
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
  @media screen and (max-width: 600px) {
    font-size: 40px;
  }
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
  font-size: 18px;
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
  margin-top: 1em;
`;

export const AboutSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const LineSeparator = styled.img`
  position: absolute;
  object-fit: contain;
  left: 50%;
  top: 20%;
  height: 70%;

  @media screen and (max-width: 1600px) {
    margin-top: 4em;
    height: 66%;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    height: 52%;
    top: 24%;
    left: 10%;
  }
`;

export const SectionSummary = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  padding: 2rem 1.25rem 0 0;
  @media screen and (max-width: 1600px) {
    padding: 0 1.25rem 0 0;
  }
`;

export const TittleSummary = styled.div`
  font-size: 54px;
  font-weight: bold;
  color: #282b3c;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    font-size: 34px;
  }
`;

export const TextDescription = styled.div`
  font-size: 1.1em;
  display: flex;
  flex-wrap: wrap;
  font-family: "Montserrat", sans-serif;
  color: #3b3b3b;
  padding: 2rem;
`;

export const TittleSummaryActive = styled(TittleSummary)`
  font-size: 40px;

  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

export const TextSummary = styled.div`
  font-size: 1.5rem;
  font-family: "Montserrat italic", sans-serif;
  color: #3b3b3b;
  padding: 2rem;
  text-align: center;

  @media screen and (max-width: 1600px) {
    font-size: 1.2rem;
    margin-top: 0.5em;
  }

  @media screen and (max-width: 600px) {
    padding: 10px;
    width: 100%;
    margin-top: 5px;
    font-size: 1.1em;
    font-family: "Raleway", sans-serif;
    display: none;
    text-align: left;
  }
`;

export const Skill = styled.div`
  border-radius: 10%;
  color: #3b3b3b;
  padding: 10px;
  border: 1px solid #3b3b3b;
  margin: 2px;
  cursor: pointer;

  &:hover {
    transform-style: translateX(-100%);
    transition: 0.4s ease-in-out;
  }

  &.skill1:hover,
  &.skill1:focus {
    background-color: #303030;
    color: #fff;
  }
  &.skill2:hover,
  &.skill2:focus {
    background-color: #b40a0a;
    color: #fff;
  }
  &.skill3:hover,
  &.skill3:focus {
    background-color: #167b45;
    color: #fff;
  }
  &.skill4:hover,
  &.skill4:focus {
    background-color: #6c1287;
    color: #fff;
  }
  &.skill5:hover,
  &.skill5:focus {
    background-color: #006fea;
    color: #fff;
  }
  &.skill6:hover,
  &.skill6:focus {
    background-color: #006fea;
    color: #fff;
  }
`;

export const DivSkills = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  margin-bottom: 4em;
`;

export const SectionItem = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  left: 49%;
  border-radius: 50px;
  background-color: #282b3c;
  position: absolute;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: #4d5374;
    transform: scale(100%);
    transition: 0.3s ease-in-out;
  }

  @media screen and (max-width: 1600px) {
    left: 49%;
    margin-top: 3em;
    width: 32px;
    height: 32px;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    width: 20px;
    height: 20px;
    left: 8.5%;
    margin-top: 7%;
  }
`;

export const Icon1 = styled(Icon)`
  top: 30%;
`;

export const Icon2 = styled(Icon)`
  top: 45%;
`;

export const Icon3 = styled(Icon)`
  top: 60%;
`;

export const Icon4 = styled(Icon)`
  top: 75%;
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
  cursor: pointer;
  @media screen and (max-width: 1550px) {
    font-size: 1.2rem;
    margin-top: 2.5em;
  }
  @media screen and (max-width: 600px) {
    display: flex;
    font-size: 1em;
    margin-top: 6.5%;
    left: 20%;
  }
`;

export const DivTitleIcon1 = styled(DivTitleIcon)`
  top: 30%;
`;
export const DivTitleIcon2 = styled(DivTitleIcon)`
  top: 45%;
`;
export const DivTitleIcon3 = styled(DivTitleIcon)`
  top: 60%;
`;
export const DivTitleIcon4 = styled(DivTitleIcon)`
  top: 75%;
`;

export const MobileContent = styled.div`
  width: 100%;
  background-color: red;
  font-family: "Raleway", sans-serif;
`;
