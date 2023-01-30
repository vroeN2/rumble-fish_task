import React from "react";
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
    image: "https://picsum.photos/800/1200",
    rating: 4.4,
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consectetur temporibus asperiores optio iure illo quaerat, provident eos atque dignissimos?",
    title: "Lorem ipsum dolor sit amet",
  },
  {
    id: "3",
    image: "https://picsum.photos/800/1200",
    rating: 8.0,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia vel omnis rerum tempora, debitis quisquam recusandae assumenda facere libero molestiae.",
    title: "Lorem, ipsum dolor",
  },
];

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <CardsWrapper>
          {movies.map((movie) => {
            return <MovieCard {...movie} key={movie.id} />;
          })}
        </CardsWrapper>

        <ButtonWrapper>
          <TinderButton>
            <FaTimes />
          </TinderButton>

          <LoveButton>
            <FaHeart />
          </LoveButton>
        </ButtonWrapper>
      </PageWrapper>
    </>
  );
}

export default App;
