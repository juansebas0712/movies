import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.scss';
import {Homepage} from './Routes/Homepage';
import { MovieCategory } from './Routes/MovieCategory';
import { SingleMovie } from './Routes/SingleMovie';

const router = createBrowserRouter( [
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "movie-category/:id",
    element: <MovieCategory />
  },
  {
    path: "movie/:id",
    element: <SingleMovie />
  }
]

      

);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);