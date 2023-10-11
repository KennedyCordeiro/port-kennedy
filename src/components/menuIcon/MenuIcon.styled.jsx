import styled from "styled-components";

const StyledLabel = styled.label`
  --color: #a5a5b0;
  --size: 30px;
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
    animation: keyframes-return 0.5s;
  }

  .chevron-down {
    position: absolute;
    display: none;
    animation: keyframes-fill 0.5s;
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

  @keyframes keyframes-fill {
    0% {
      transform: rotate(-90deg) scale(0);
      opacity: 0;
    }

    50% {
      transform: rotate(0deg) scale(1.2);
    }
  }

  @keyframes keyframes-return {
    0% {
      transform: rotate(90deg) scale(0);
      opacity: 0;
    }

    50% {
      transform: rotate(0deg) scale(1.2);
    }
  }
`;

export default StyledLabel;
