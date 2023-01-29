import MovieCard from "./componnets/MovieCard";
import { PageWrapper } from "./componnets/styled";

export interface MovieCardInterface {
  id: string;
  image: string;
  title: string;
  summary: string;
  rating: number;
}

const test: MovieCardInterface = {
  id: "123asdf",
  image: "https://picsum.photos/800/1200",
  rating: 7.5,
  summary:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam alias blanditiis doloremque fugit omnis autem magni est sit perspiciatis quos!",
  title: "Star Warsy",
};

function App() {
  return (
    <PageWrapper>
      <MovieCard {...test} />
    </PageWrapper>
  );
}

export default App;
