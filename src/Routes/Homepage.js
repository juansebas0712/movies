import React from "react";
import { Header } from "../Header";
import { MovieGenres } from "../MovieGenres";
import { MovieSlider } from "../MovieSlider";
import { MoviesSection } from "../MoviesSection";

function Homepage() {

  return (
    <>
      <Header />
      <MovieSlider endPoint={'/trending/movie/week'} />
      <MoviesSection sectionTitle={'Action'} endPoint={'/discover/movie?with_genres=10751'} />
      <MoviesSection sectionTitle={'Adventure'} endPoint={'/discover/movie?with_genres=12'} />
      <MoviesSection sectionTitle={'Animation'} endPoint={'/discover/movie?with_genres=16'} />
      <MoviesSection sectionTitle={'Family'} endPoint={'/discover/movie?with_genres=10751'} />
      <MovieGenres sectionTitle={'Genres'} />
    </>
  );
}

export { Homepage };