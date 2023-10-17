import styled, { keyframes } from "styled-components";

const mainBlock = keyframes`
  0% {
    width: 0;
    left: 0;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
`;

const secBlock = keyframes`
  0% {
    width: 0;
    left: 0;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
`;

const mainFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const popIn = keyframes`
  0% {
    width: 0px;
    height: 0px;
    background: #d7d7d7;
    border: 0px solid #ddd;
    opacity: 0;
  }
  50% {
    width: 10px;
    height: 10px;
    background: #d7d7d7;
    opacity: 1;
    bottom: 45px;
  }
  65% {
    width: 7px;
    height: 7px;
    bottom: 0px;
    width: 15px;
  }
  80% {
    width: 10px;
    height: 10px;
    bottom: 20px;
  }
  100% {
    width: 7px;
    height: 7px;
    background: #d7d7d7;
    border: 0px solid #222;
    bottom: 13px;
  }
`;

const secFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
`;

const top = keyframes`
  0% {
    opacity: 0;
    bottom: -80px;
  }
  100% {
    opacity: 1;
    bottom: 0px;
  }
`;

const icon = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.0);
  }
  50% {
    opacity: 1;
    transform: scale(1.3) rotate(-02deg);
  }
  100% {
    opacity: 1;
    bottom: 0px;
  }
`;

export const BannerContent = styled.div`
  top: 0;
  display: flex;
  left: 0;
  font-family: Raleway, sans-serif !important;
  flex-direction: column;
  justify-content: flex-start;
  color: #3b3b3b;
  display: flex;
  width: 100%;

  @media screen and (max-width: 900px) {
    color: #909090;
    margin-left: 80px;
  }

  @media screen and (max-width: 768px) {
    color: #909090;
    margin-left: 0;
    top: 20%;
    width: 100%;
    text-align: center;
    align-items: center;
  }
`;

export const BannerH2 = styled.h2`
  font-size: 40px;

  @media screen and (max-width: 900px) {
    /* Add styles for smaller screens here */
  }
`;

export const BannerH3 = styled.h3`
  margin: 0;
  opacity: 0.7;
`;

export const Profile = styled.a`
  font-size: 75px;
  margin-top: 15px;
  font-weight: bold;

  @media screen and (max-width: 1600px) {
    font-size: 60px;
  }

  @media screen and (max-width: 600px) {
    font-size: 35px;
    margin-top: 0;
    width: fit-content;
  }
`;

export const Profile2 = styled.div`
  font-size: 18px;
  margin-top: 15px;
  font-weight: bold;
`;

export const TxtRotate = styled.div`
  display: flex;
  width: fit-content;
  font-size: 1.3em;
  color: #909090;
`;

export const Wrap = styled.span`
  /* Define any additional styles for the "wrap" class here if needed */
`;
