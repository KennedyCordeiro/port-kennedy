// Navbar.styled.js
import styled from "styled-components";

export const NavWrapper = styled.nav`
  top: 0;
  left: 0;
  width: 100%;
  margin: 50px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: end;
  background: none;
  padding-right: 80px;
  font-family: "Euclid Circular A", "Poppins";
  position: sticky;
  z-index: 1000;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const StyledLink = styled.a`
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #483285;
    transform: scaleX(0);
    transition: transform 0.25s;
  }

  &::before {
    top: -3px;
    transform-origin: left;
  }

  &::after {
    bottom: -3px;
    transform-origin: right;
  }

  &:hover::before,
  &:hover::after,
  &.active::before,
  &.active::after {
    transform: scaleX(1);
  }
`;
