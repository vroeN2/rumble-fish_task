import styled, { css } from "styled-components";

interface CardBackground {
  backgroundURL?: string;
}

export const CardBase = styled.div`
  aspect-ratio: 5 / 7;
  background-color: ${(props) => props.theme.primary};
  position: absolute;
  transition: transform 0.8s cubic-bezier(0.05, 0.43, 0.25, 0.95);
  box-shadow: 0.2vmin 0.2vmin 0.2vmin 0 black;
`;

export const SingleCardWrapper = styled(CardBase)<CardBackground>`
  width: 30vmin;
  border-radius: 1vmin;
  border: 0.3vmin solid ${(props) => props.theme.accent};

  &:nth-child(1) {
    /* description card */
    transform: translateX(-10%) rotate(-1deg);
  }

  &:nth-child(2) {
    /* photo card */
    transform: rotate(1deg);
    overflow: hidden;

    ${({ backgroundURL }) =>
      backgroundURL &&
      css`
        background-image: url(${backgroundURL});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      `}
  }

  &:nth-child(3) {
    /* title card */
    transform: translateX(10%) rotate(3deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 2vmin;
  }
`;
