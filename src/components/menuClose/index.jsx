import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";

// Define os estilos de animação
const keyframesFill = keyframes`
  0% {
    transform: rotate(90deg) scale(0);
    opacity: 0;
  }

  50% {
    transform: rotate(0deg) scale(1.2);
  }
`;

const keyframesReturn = keyframes`
  0% {
    transform: rotate(90deg) scale(0);
    opacity: 0;
  }

  50% {
    transform: rotate(0deg) scale(1.2);
  }
`;
const iconSize = css`
  --size: 30px;

  @media (max-width: 768px) {
    --size: 20px;
  }
`;
const Container = styled.label`
  --color: #353951;
  ${iconSize}
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  font-size: var(--size);
  user-select: none;
  fill: var(--color);

  .chevron-right {
    position: absolute;
    animation: ${keyframesReturn} 0.5s;
  }

  .chevron-down {
    position: absolute;
    display: none;
    animation: ${keyframesFill} 0.5s;
  }

  input:checked ~ .chevron-right {
    display: none;
  }

  input:checked ~ .chevron-down {
    display: block;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
`;

const MenuClose = ({ Disable, HandleMenu }) => {
  const [animationActive, setAnimationActive] = useState(false);

  const handleButtonClick = () => {
    setAnimationActive(true);
    setActive(Disable);
    setTimeout(() => {
      setAnimationActive(false);
      HandleMenu();
    }, 600);
  };

  const [active, setActive] = useState(true);

  return (
    <Container style={{ marginLeft: "20px" }}>
      <input
        type="checkbox"
        defaultChecked={Disable ? Disable : active}
        onClick={handleButtonClick}
      />
      <svg
        className={`chevron-right ${animationActive ? "active" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 320 512"
      >
        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
      </svg>
      <svg
        className={`chevron-down ${animationActive ? "active" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
      >
        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
      </svg>
    </Container>
  );
};

export default MenuClose;
