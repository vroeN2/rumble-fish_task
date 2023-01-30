import React, { useState } from "react";
import MovieCard from "./componnets/MovieCard";
import {
  ButtonWrapper,
  CardsWrapper,
  LoveButton,
  PageWrapper,
  TinderButton,
} from "./componnets/styled";
import { FaHeart, FaTimes } from "react-icons/fa";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";

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

const movies: MovieCardInterface[] = [
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
  const ref = React.useRef<HTMLInputElement>(null);

  const nextCard = (): (() => void) => {
    const timer = setTimeout(() => {
      setVisibleCardIndex(
        visibleCardIndex + 1 <= movies.length - 1 ? visibleCardIndex + 1 : 0
      );
    }, 500);
    return () => clearTimeout(timer);
  };

  const previousCard = (): (() => void) => {
    const timer = setTimeout(() => {
      setVisibleCardIndex(
        visibleCardIndex - 1 >= 0 ? visibleCardIndex - 1 : movies.length - 1
      );
    }, 500);
    return () => clearTimeout(timer);
  };

  console.log("ref", ref);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageWrapper>
        <CardsWrapper ref={ref}>
          {movies.map((movie, index) => {
            return (
              <MovieCard
                {...movie}
                key={index}
                index={index}
                visibleCardIndex={visibleCardIndex}
              />
            );
          })}
        </CardsWrapper>

        <ButtonWrapper>
          <TinderButton onClick={() => previousCard()}>
            <FaTimes />
          </TinderButton>

          <LoveButton onClick={() => nextCard()}>
            <FaHeart />
          </LoveButton>
        </ButtonWrapper>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;
