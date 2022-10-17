import React from "react";
import { Header } from "../Header";
import { MovieGenres } from "../MovieGenres";
import { MovieSlider } from "../MovieSlider";
import { MoviesSection } from "../MoviesSection";

function Homepage(props) {

  return (
    <>
      <Header {...props} />
      <MovieSlider endPoint={'/trending/movie/week'} />
      <MoviesSection sectionTitle={'Action'} endPoint={'/discover/movie?with_genres=28'} {...props} />
      <MoviesSection sectionTitle={'Adventure'} endPoint={'/discover/movie?with_genres=12'} {...props} />
      <MoviesSection sectionTitle={'Animation'} endPoint={'/discover/movie?with_genres=16'} {...props} />
      <MoviesSection sectionTitle={'Family'} endPoint={'/discover/movie?with_genres=10751'} {...props} />
      <MovieGenres sectionTitle={'Genres'} />
    </>
  );
}

export { Homepage };