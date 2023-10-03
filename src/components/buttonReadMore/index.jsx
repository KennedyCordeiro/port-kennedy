import { Button } from "@mui/material";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1rem;
  font-size: 1.1rem;
  font-family: Raleway, sans-serif;
  background-color: transparent;
  border: 0;
  font-weight: bolder;
  text-transform: uppercase;
  cursor: pointer;
  color: #d7d7d7ff;
  border: 0.031rem solid #d7d7d7ff;
  border-width: 0 0.031rem;
`;

const ButtonReadMore = ({ Text, onClickButton }) => {
  return <StyledButton onClick={onClickButton}>{Text}</StyledButton>;
};

export default ButtonReadMore;
