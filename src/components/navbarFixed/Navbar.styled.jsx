// Navbar.styled.js
import styled from "styled-components";

export const NavWrapper = styled.nav`
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  font-family: "Euclid Circular A", "Poppins";
  position: fixed;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: transparent;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: 100px;
  margin-top: 20px;

  @media screen and (max-width: 900px) {
    margin-right: 20px;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 40px;
  @media screen and (max-width: 900px) {
    display: none;
  }
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

export const IconMenu = styled.div`
  display: none;
  @media screen and (max-width: 900px) {
    display: flex;
    margin-right: 2px;
    position: absolute;
  }
`;
