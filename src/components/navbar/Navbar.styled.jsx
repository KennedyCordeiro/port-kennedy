import React from "react";
import styled from "styled-components";

export const NavWrapper = styled.nav`
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 0 24px 0 24px;
  background: transparent;
  box-shadow: 0 0 20px rgb(0 0 0 / 8%);
  font-family: "Euclid Circular A", "Poppins";
  justify-content: end;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 18px;
  font-weight: 600;
  color: #eff1f0;
  cursor: pointer;
`;

export const NavIcons = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;
