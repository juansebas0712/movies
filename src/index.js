import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import './index.scss';
import {Homepage} from './Routes/Homepage';
import { MovieCategory } from './Routes/MovieCategory';
import { SingleMovie } from './Routes/SingleMovie';
import { Search } from './Routes/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename='/movies'>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="movie-category/:id" element={<MovieCategory />}></Route>
      <Route path="movie/:id" element={<SingleMovie />}></Route>
      <Route path="search" element={<Search />} />
    </Routes>
  </BrowserRouter>

);