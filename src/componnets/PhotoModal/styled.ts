import styled from "styled-components";

export const PhotoModalWrapper = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  position: absolute;
  display: grid;
  place-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;

export const PhotoModalDisplay = styled.img`
  height: 80%;
  transition: 0.3s all cubic-bezier(0, 0.68, 1, 0.59);
  animation: grow 0.3s;
  z-index: 6;

  @keyframes grow {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;
