import styled from "styled-components";
import { MovieDesc, MovieRating, MovieTitle } from "../MovieCard/styled";

interface WithBackground {
  link: string;
}

export const MobileWrapper = styled.div<WithBackground>`
  display: none;

  @media (max-width: 750px) {
    border: 0.1vmin solid ${(props) => props.theme.accent};
    position: absolute;
    display: block;
    box-sizing: border-box;
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    background-image: linear-gradient(
        180deg,
        rgba(20, 24, 64, 0) 0%,
        ${(props) => props.theme.secondary} 75%,
        ${(props) => props.theme.secondary} 100%
      ),
      url(${({ link }) => link});
    background-size: cover;
    transition: 0.6s all cubic-bezier(0, 0.68, 1, 0.59);
    border-radius: 5vmin;
  }
`;

export const MobileContentWrapper = styled.div`
  position: absolute;
  bottom: 12vh;
  left: 0;
  right: 0;
  color: white;
  padding: 2vmin 4vmin;
  display: flex;
  flex-direction: column;
  transition: 0.4s all cubic-bezier(0, 0.68, 1, 0.59);
  transition-delay: 0.2s;
`;

export const MobileMovieTitle = styled(MovieTitle)`
  color: white;
  font-size: 8vmin;
`;

export const MobileMovieRating = styled(MovieRating)`
  color: white;
  text-align: center;
  font-size: 6vmin;
  margin-top: 1vmin;
`;

export const MobileMovieDesc = styled(MovieDesc)`
  color: white;
  text-align: justify;
  text-justify: inter-word;
  font-size: 4vmin;
`;
