import { styled } from "styled-components";

export const DivSkills = styled.div`
  width: 100%;
  height: 45vh;
  background-color: #252333;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  font-family: "Joker One", sans-serif;
  padding-bottom: 15px;

  @media screen and (max-width: 900px) {
    padding-bottom: 5px;
    height: 30vh;
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
