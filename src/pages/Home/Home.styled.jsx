import Back from "../../assets/Images/background.jpg";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f2f2f2;
  height: auto;
  background-image: url(${Back});
  background-position: center;
  gap: 10px;
  width: 100%;
  flex-direction: column;
  align-items: end;
  animation: fadeIn 0.7s ease-in-out;
  padding-bottom: 10px;
  @media screen and (max-width: 900px) {
    align-items: center;
    height: auto;
    padding-bottom: 20px;
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

  @media screen and (max-width: 900px) {
    margin-right: 0px;
  }
`;

export const Itens = styled.div`
  display: flex;
`;
