import Back from "../../assets/Images/back.jpg";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-image: url(${Back});
  flex-direction: column;
  gap: 10px;
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: flex-start;
`;
