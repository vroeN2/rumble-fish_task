import React from "react";
import { ExtendedMovieCardInterface } from "../MovieCard/MovieCard";
import {
  MobileContentWrapper,
  MobileMovieDesc,
  MobileMovieRating,
  MobileMovieTitle,
  MobileWrapper,
} from "./styled";

const MobileView = ({
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
    <MobileWrapper link={image} style={currentStyle}>
      <MobileContentWrapper style={currentStyle}>
        <MobileMovieTitle>{title}</MobileMovieTitle>

        <MobileMovieRating>{rating} / 10</MobileMovieRating>

        <MobileMovieDesc>{summary}</MobileMovieDesc>
      </MobileContentWrapper>
    </MobileWrapper>
  );
};

export default MobileView;
