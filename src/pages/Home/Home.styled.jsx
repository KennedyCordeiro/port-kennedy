import Back from "../../assets/Images/background.jpg";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f2f2f2;
  height: 100vh;
  background-image: url(${Back});
  background-position: center;
  gap: 10px;
  width: 100%;
  flex-direction: column;
  align-items: end;
`;

export const NavbarContainer = styled.div`
  align-items: center;
  height: 10%;
  width: 100%;
  justify-content: end;
  position: fixed;
  padding-right: 40px;
`;

export const Column = styled.div`
  flex: 1;
  position: relative;

  justify-content: center;
`;

export const MidSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 80px;
`;

export const Itens = styled.div`
  display: flex;
`;
