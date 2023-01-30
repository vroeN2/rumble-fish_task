import React, { useState } from "react";
import { MovieCardInterface } from "../../App";
import SingleCard from "../SingleCard";
import { CardWrapper, MovieRating, MovieTitle, MovieDesc } from "./styled";
import CSS from "csstype";
import PhotoModal from "../PhotoModal";

interface ExtendedMovieCardInterface extends Omit<MovieCardInterface, "id"> {
  index: number;
  visibleCardIndex: number;
}

const MovieCard = ({
  image,
  title,
  summary,
  rating,
  index,
  visibleCardIndex,
}: ExtendedMovieCardInterface): JSX.Element => {
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);
  const currentStyle: CSS.Properties =
    visibleCardIndex === index
      ? {
          transform: "scale(1)",
        }
      : {
          transform: "scale(0)",
        };

  return (
    <CardWrapper style={currentStyle}>
      {/* description card */}
      <SingleCard>
        <MovieDesc>{summary}</MovieDesc>
      </SingleCard>

      {/* photo card */}
      <SingleCard
        backgroundURL={image}
        onClick={() => setIsPhotoOpen((isPhotoOpen) => !isPhotoOpen)}
      />

      {isPhotoOpen && <PhotoModal link={image} setFalse={setIsPhotoOpen} />}

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
