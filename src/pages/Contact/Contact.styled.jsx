import { styled } from "styled-components";
import BackgroundContact from "../../assets/Images/contact.svg";

export const Container = styled.div`
  width: 100%;
  flex-direction: column;
  height: 100vh;
  display: flex;
  font-family: "Joker One", sans-serif;
  /* background-image: url(${BackgroundContact});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  background-color: #252333ff;

  align-items: center;
`;

export const TitleDiv = styled.div`
  font-size: 70px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 20px;
  display: flex;
`;

export const MidSection = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  border-radius: 10px;
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
  font-size: 20px;
  width: 100%;
  padding: 0 20px 0 0;
  align-items: center;
  justify-content: center;
  font-style: normal;
  margin-bottom: 20px;
`;

export const Column = styled.div`
  width: 50%;
  flex-direction: row;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;
