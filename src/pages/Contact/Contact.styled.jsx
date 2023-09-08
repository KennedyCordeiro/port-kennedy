import { styled } from "styled-components";
import BackgroundContact from "../../assets/Images/contact.svg";

export const Container = styled.div`
  width: 100%;
  flex-direction: column;
  height: 100vh;
  display: flex;
  font-family: "Euclid Circular A", "Poppins";
  background-image: url(${BackgroundContact});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
`;

export const TitleDiv = styled.div`
  font-size: 40px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 20px;
  display: flex;
`;

export const MidSection = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  height: 80%;
  background-color: #171515;
  border-radius: 10px;
`;

export const AddressDiv = styled.div`
  display: flex;
  width: 50%;
  font-size: 25px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Paragraph = styled.div`
  display: flex;
  width: 50%;
  padding: 0 20px 0;
  align-items: center;
  justify-content: center;
`;
