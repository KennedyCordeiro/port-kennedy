import React from "react";
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

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const Link = styled.a`
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
    background-color: #0561ee;
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
