import React from "react";
import { MovieCardInterface } from "../../App";
import SingleCard from "../SingleCard";
import { CardWrapper, MovieRating, MovieTitle, MovieDesc } from "./styled";
import CSS from "csstype";

interface ExtendedMovieCardInterface extends Omit<MovieCardInterface, "id"> {
  index: number;
  visibleCardIndex: number;
  animation: CSS.Properties;
}

const MovieCard = ({
  image,
  title,
  summary,
  rating,
  index,
  visibleCardIndex,
  animation,
}: ExtendedMovieCardInterface): JSX.Element => {
  const currentStyle =
    visibleCardIndex === index
      ? { transform: "translateX(0) scale(1)" }
      : animation;

  return (
    <CardWrapper style={currentStyle}>
      {/* description card */}
      <SingleCard>
        <MovieDesc>{summary}</MovieDesc>
      </SingleCard>

      {/* photo card */}
      <SingleCard backgroundURL={image} />

      {/* title card */}
      <SingleCard>
        <>
          <MovieTitle>{title}</MovieTitle>

          <MovieRating>{rating} / 10</MovieRating>
        </>
      </SingleCard>
    </CardWrapper>
  );
};

export default MovieCard;
