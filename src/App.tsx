import React, { useState } from "react";
import MovieCard from "./componnets/MovieCard";
import {
  ButtonWrapper,
  CardsWrapper,
  LoveButton,
  MobileViewWrapper,
  PageWrapper,
  TinderButton,
} from "./componnets/styled";
import { FaHeart, FaTimes } from "react-icons/fa";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import CSS from "csstype";
import MobileView from "./componnets/MobileView";

const theme = {
  primary: "#ffffff",
  secondary: "#081f27",
  accent: "#e7ab15",
  green: "#49FF00",
  red: "#FF0000",
};

export interface MovieCardInterface {
  id: string;
  image: string;
  title: string;
  summary: string;
  rating: number;
}

export const movies: MovieCardInterface[] = [
  {
    id: "1",
    image: "https://picsum.photos/800/1200",
    rating: 7.5,
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam alias blanditiis doloremque fugit omnis autem magni est sit perspiciatis quos!",
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing",
  },
  {
    id: "2",
    image: "https://picsum.photos/900/1200",
    rating: 4.4,
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur temporibus asperiores optio iure illo quaerat, provident eos atque dignissimos?",
    title: "Lorem ipsum dolor sit amet",
  },
  {
    id: "3",
    image: "https://picsum.photos/800/1100",
    rating: 8.0,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia vel omnis rerum tempora, debitis quisquam recusandae assumenda facere libero molestiae.",
    title: "Lorem, ipsum dolor",
  },
];

function App(): JSX.Element {
  const [visibleCardIndex, setVisibleCardIndex] = useState(0);
  const [animation, setAnimation] = useState<CSS.Properties>({
    transform: "translateX(0) scale(0)",
  });
  const [animationMobile, setAnimationMobile] = useState<CSS.Properties>({
    transform: "translateX(0)",
    opacity: 1,
  });

  const handleClickLove = (): (() => void) => {
    setAnimation({ transform: "translateX(100%) scale(0)" });
    setAnimationMobile({
      transform: "translateX(100%)",
      opacity: 0,
    });
    const timer = setTimeout(() => {
      setVisibleCardIndex(
        visibleCardIndex + 1 <= movies.length - 1 ? visibleCardIndex + 1 : 0
      );
    }, 300);
    return () => clearTimeout(timer);
  };

  const handleClickHate = (): (() => void) => {
    setAnimation({ transform: "translateX(-100%) scale(0)" });
    setAnimationMobile({
      transform: "translateX(-100%)",
      opacity: 0,
    });
    const timer = setTimeout(() => {
      setVisibleCardIndex(
        visibleCardIndex - 1 >= 0 ? visibleCardIndex - 1 : movies.length - 1
      );
    }, 300);
    return () => clearTimeout(timer);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageWrapper>
        <CardsWrapper>
          {movies.map((movie, index) => {
            return (
              <MovieCard
                {...movie}
                key={index}
                index={index}
                visibleCardIndex={visibleCardIndex}
                animation={animation}
              />
            );
          })}
        </CardsWrapper>

        <MobileViewWrapper>
          {movies.map((movie, index) => {
            return (
              <MobileView
                {...movie}
                key={index}
                index={index}
                visibleCardIndex={visibleCardIndex}
                animation={animationMobile}
              />
            );
          })}
        </MobileViewWrapper>

        <ButtonWrapper>
          <TinderButton onClick={() => handleClickHate()}>
            <FaTimes />
          </TinderButton>

          <LoveButton onClick={() => handleClickLove()}>
            <FaHeart />
          </LoveButton>
        </ButtonWrapper>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;
