import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import './index.scss';
import {Homepage} from './Routes/Homepage';
import { MovieCategory } from './Routes/MovieCategory';
import { SingleMovie } from './Routes/SingleMovie';
import { Search } from './Routes/Search';
import { useLocalStorage } from "./MovieContext/useLocalStorage";
import { LikedMovies } from './Routes/LikedMovies';

function App() {
  const [likedMovies, setLikedMovies] = useLocalStorage('likedMovies', []);

  return (
    <BrowserRouter basename='/movies'>
      <Routes>
        <Route path="/" element={<Homepage likedMovies={likedMovies} setLikedMovies={setLikedMovies} />}></Route>
        <Route path="movie-category/:id" element={<MovieCategory likedMovies={likedMovies} setLikedMovies={setLikedMovies} />}></Route>
        <Route path="movie/:id" element={<SingleMovie likedMovies={likedMovies} setLikedMovies={setLikedMovies} />}></Route>
        <Route path="search" element={<Search likedMovies={likedMovies} setLikedMovies={setLikedMovies} />} />
        <Route path="liked" element={<LikedMovies likedMovies={likedMovies} setLikedMovies={setLikedMovies} />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);