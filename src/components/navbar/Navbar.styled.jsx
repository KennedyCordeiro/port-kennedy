import styled from "styled-components";

export const NavWrapper = styled.nav`
  top: 0;
  left: 0;
  height: 60px;
  width: 50%;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding-right: 9px;
  background: transparent;
  font-family: "Euclid Circular A", "Poppins";
`;

export const NavLink = styled.a`
  color: inherit;
  font-size: 18px;
  font-weight: 600;
  color: #eff1f0;
  cursor: pointer;
`;

export const NavIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
