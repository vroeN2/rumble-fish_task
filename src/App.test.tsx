import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { movies } from "./App";

test("renders movie cards", () => {
  const firstMovieTitle = movies[0].title;

  render(<App />);
  const movieCards = screen.getAllByText(firstMovieTitle);
  movieCards.map((card) => expect(card).toBeInTheDocument());
});
