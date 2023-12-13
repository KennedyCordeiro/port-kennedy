import styled, { keyframes } from "styled-components";

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

const trackingContract = keyframes`
0% {
    letter-spacing: 1em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    letter-spacing: normal;
    opacity: 1;
  }

`;

const trackingExpand = keyframes`
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }`;

export const Profile = styled.a`
  font-size: 4.8rem;
  margin-top: 15px;
  font-weight: bold;
  animation: ${trackingContract} 1.2s cubic-bezier(0.215, 0.61, 0.355, 1) both;

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
  font-size: 1.6em;
  color: #909090;
`;

export const Wrap = styled.span`
  /* Define any additional styles for the "wrap" class here if needed */
`;
