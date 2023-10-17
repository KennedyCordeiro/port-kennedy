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

const Box = styled.div`
  width: 250px;
  height: 250px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  height: 50px;

  .block {
    width: 0;
    height: inherit;
    background: #3b3b3b;
    position: absolute;
    animation: ${mainBlock} 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
    display: flex;
  }

  h1 {
    font-family: "Poppins";
    color: #fff;
    font-size: 32px;
    animation: ${mainFadeIn} 2s forwards;
    animation-delay: 1.6s;
    opacity: 0;
    display: flex;
    align-items: baseline;
    position: relative;

    span {
      width: 0;
      height: 0;
      border-radius: 50%;
      background: #3b3b3b;
      animation: ${popIn} 0.8s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
      animation-delay: 2s;
      margin-left: 5px;
      margin-top: -10px;
      position: absolute;
      bottom: 13px;
      right: -12px;
    }
  }
`;

const Role = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  height: 30px;
  margin-top: -10px;

  .block {
    width: 0;
    height: inherit;
    background: #7811a8;
    position: absolute;
    animation: ${secBlock} 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
    animation-delay: 2s;
    display: flex;
  }

  p {
    animation: ${secFadeIn} 2s forwards;
    animation-delay: 3.2s;
    opacity: 0;
    font-weight: 400;
    font-family: "Lato";
    color: #ffffff;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 5px;
  }
`;

const Footer = styled.footer`
  width: 350px;
  height: 80px;
  background: #ffb510;
  position: absolute;
  right: 0;
  bottom: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${top} 0.8s forwards;
  animation-delay: 4s;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #232323;
    font-family: "Poppins";

    i {
      margin-right: 25px;
      font-size: 22px;
      color: #232323;
      animation: ${icon} 2s forwards;
      animation-delay: 4s;
      opacity: 0;
    }
  }
`;

const TextAnimation = () => {
  return (
    <>
      <Box>
        <Title>
          <div className="block"></div>
          <h1>
            Kaio Almeida<span></span>
          </h1>
        </Title>
        <Role>
          <div className="block"></div>
          <p>UI Dev designer</p>
        </Role>
      </Box>
      <Footer>
        <span>
          <i className="fab fa-facebook"></i>
        </span>
      </Footer>
    </>
  );
};

export default TextAnimation;
