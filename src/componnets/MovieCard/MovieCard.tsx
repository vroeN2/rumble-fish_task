import { MovieCardInterface } from "../../App";
import SingleCard from "../SingleCard";
import { CardWrapper, MovieRating, MovieTitle, MovieDesc } from "./styled";

const MovieCard = ({
  image,
  title,
  summary,
  rating,
}: Omit<MovieCardInterface, "id">) => {
  return (
    <CardWrapper>
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
