import { styled } from "styled-components";

export const DivSkills = styled.div`
  width: 100%;
  height: 110vh;
  background-color: #d7d7d7;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  font-family: "Joker One", sans-serif;
  padding-bottom: 15px;

  @media screen and (max-width: 900px) {
    padding-bottom: 5px;
  }
`;
export const DivTitle = styled.div`
  width: 500px;
  height: 80px;
  border: 1px solid;
  margin: 20px 0 40px 0;
  border-color: #3b3b3b;
  border-radius: 20% 0 20% 0;
  align-items: center;
  display: flex;
  justify-content: center;
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

export const DivIcons = styled.div``;
