// Navbar.styled.js
import styled, { keyframes } from "styled-components";
import { Link as ScrollLink } from "react-scroll";

const showMenu = keyframes`
  from{ 
    opacity: 0;
    width: 0;
  }
  to{

    opacity: 1;
    width:100%;
  }
`;

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

  @media screen and (max-width: 900px) {
    top: 0px;
    width: 100%;
    height: 100vh;
    background-color: #ffffff59;
    gap: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    backdrop-filter: blur(20px);
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: 80px;
  margin-top: 20px;
  @media screen and (max-width: 900px) {
    margin-right: 0px;
    margin-top: 0px;
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

export const DivIcon = styled.div`
  display: none;
  @media screen and (max-width: 900px) {
    margin-right: 20px;
    position: absolute;
    display: flex;
    top: 20px;
    right: 20px;
  }
`;

export const NavIconsSmart = styled.div`
  display: none;
  @media screen and (max-width: 900px) {
    translate: 0 0;
    gap: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    transition: 0.5s;
    animation: showMenu 4s;
    font-size: 22px;
  }
`;

export const StyledLink = styled(ScrollLink)`
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
