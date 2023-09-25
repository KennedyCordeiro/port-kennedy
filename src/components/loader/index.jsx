import React from "react";
import styled, { keyframes } from "styled-components";

const loaderAnimation = keyframes`
  0% {
    transform: translate(0, 0);
  }
  5% {
    transform: translate(8px, -14px);
  }
  10% {
    transform: translate(15px, -10px);
  }
  17% {
    transform: translate(23px, -24px);
  }
  20% {
    transform: translate(30px, -20px);
  }
  27% {
    transform: translate(38px, -34px);
  }
  30% {
    transform: translate(45px, -30px);
  }
  37% {
    transform: translate(53px, -44px);
  }
  40% {
    transform: translate(60px, -40px);
  }
`;

const LoaderWrapper = styled.div`
  position: relative;
  width: 75px;
  height: 100px;
`;

const LoaderBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 10px;
  height: 50%;
  background: rgb(0, 0, 0);
  transform-origin: center bottom;
  box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
`;

const LoaderBall = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 10px;
  height: 10px;
  background: rgb(44, 143, 255);
  border-radius: 50%;
  animation: ${loaderAnimation} 4s infinite;
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderBar style={{ left: "0", transform: "scale(1, 0.2)" }}></LoaderBar>
      <LoaderBar
        style={{ left: "15px", transform: "scale(1, 0.4)" }}
      ></LoaderBar>
      <LoaderBar
        style={{ left: "30px", transform: "scale(1, 0.6)" }}
      ></LoaderBar>
      <LoaderBar
        style={{ left: "45px", transform: "scale(1, 0.8)" }}
      ></LoaderBar>
      <LoaderBar style={{ left: "60px", transform: "scale(1, 1)" }}></LoaderBar>
      <LoaderBall></LoaderBall>
    </LoaderWrapper>
  );
};

export default Loader;
