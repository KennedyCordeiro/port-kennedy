import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  flex-direction: column;
  height: 55vh;
  display: flex;
  font-family: "Euclid Circular A", "Poppins";
  background: #282b3cff;
`;

export const TitleDiv = styled.div`
  font-size: 40px;
  width: 100%;
  justify-content: center;
  align-items: baseline;
  margin: 20px;
  display: flex;
`;

export const MidSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
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
