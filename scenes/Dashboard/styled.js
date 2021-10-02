import styled, { keyframes } from "styled-components";

const SpinnerAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`;

export const Spinner = styled.img`
  height: ${(props) => props.height};
  transform-origin: 50% 50%;
  animation: ${SpinnerAnimation} 0.5s linear 0s infinite;
`;
