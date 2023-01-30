import styled from "styled-components";

export const CardWrapper = styled.div`
  aspect-ratio: 5 / 7;
  width: 30vmin;
  position: absolute;

  &:hover > :nth-child(1) {
    transform: translate(-75%, 16%) rotate(-20deg);
  }

  &:hover > :nth-child(2) {
    transform: translate(-5%, 8%) rotate(2deg);
  }

  &:hover > :nth-child(3) {
    transform: translate(70%, 20%) rotate(24deg);
  }
`;

export const MovieTitle = styled.h2`
  margin: 0;
  font-size: 2rem;
  color: #1b1b1b;
  text-align: center;
  margin-bottom: 1vmin;
`;

export const MovieRating = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: #1b1b1b;
`;

export const MovieDesc = styled.h3`
  margin: 0;
  padding: 3vmin;
  font-size: 1rem;
  color: #1b1b1b;
`;
