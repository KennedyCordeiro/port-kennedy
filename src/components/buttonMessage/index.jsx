import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1em 2em;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 6px;
  text-transform: uppercase;
  color: #ffffff;
  transition: all 1000ms;
  font-size: 15px;
  position: relative;
  overflow: hidden;
  outline: 2px solid #50367e;
  background-color: transparent;
  width: 350px;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    letter-spacing: 2px;
    width: 250px;
    font-size: 12px;
  }

  &:hover {
    color: #ffffff;
    transform: scale(1.03);
    outline: 2px solid #50367e;
    box-shadow: 4px 5px 17px -4px #50367e;
  }

  &::before {
    content: "";
    position: absolute;
    left: -50px;
    top: 0;
    width: 0;
    height: 100%;
    background-color: #50367e;
    transform: skewX(45deg);
    z-index: -1;
    transition: width 700ms;
  }

  &:hover::before {
    width: 150%;
  }
`;

const DivButton = styled.div`
  margin-top: 80px;

  @media screen (max-width: 900px) {
    margin-top: 40px;
  }
`;

const ButtonMessage = ({ Text, Onclick }) => {
  return (
    <DivButton>
      <StyledButton onClick={Onclick}>{Text}</StyledButton>
    </DivButton>
  );
};

export default ButtonMessage;
