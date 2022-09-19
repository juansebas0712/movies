import React from "react";
import {Header} from "../Header";
import { MovieProvider } from "../MovieContext";
import { MovieGenres } from "../MovieGenres";
import { MoviesSection } from "../MoviesSection";



import './App.css';

function App() {
  return (
    <>
      <Header />
      <MovieProvider>
        <MoviesSection sectionTitle={'Trending Movies'} endPoint={'/trending/movie/week'} />
        <MoviesSection sectionTitle={'Lastest Movies'} endPoint={'/discover/movie/?primary_release_year=2022-09-19'} />
        <MovieGenres sectionTitle={'Genres'} />
      </MovieProvider>
    </>
  );
}

export default App;
