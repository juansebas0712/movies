import React from "react";
import { ReactComponent as Like } from "./like.svg";
import { ReactComponent as LikeRemove } from "./likeRemove.svg";

import "./MovieLikeBtn.scss";

function MovieLikeBtn({movieId, likedMovies, setLikedMovies}) {

    function addSavedMovie(clikedMovieId) {
        const savedMovies = [...likedMovies];
        savedMovies.unshift(clikedMovieId);

        setLikedMovies(savedMovies);
    }

    function deleteSavedMovie(clikedMovieId) {
        let savedMovies = likedMovies;

        setLikedMovies(savedMovies.filter(el => el !== clikedMovieId));
    }

    function isLiked(checkMovieId) {
        const savedMovies = likedMovies;
        let isLiked = false;

        if (savedMovies.length) {
            const index = savedMovies.findIndex(el => el.toString() === checkMovieId.toString());
            
            isLiked = index >= 0;
        }
        
        return isLiked;
    }

    let isLikedMovie = isLiked(movieId);

    function handleLikeBtn(e) {
        let clikedMovieId;

        if (e.target === e.currentTarget) {
            // parent clicked.
            clikedMovieId = e.target.dataset.movieId
        }
        else {
            clikedMovieId = e.target.closest('.like-btn').dataset.movieId
        }
        
        if (isLikedMovie) {
            deleteSavedMovie(clikedMovieId)
            e.target.classList.remove('liked');
        }
        else {
            addSavedMovie(clikedMovieId);
            e.target.classList.add('liked');
        }
    }

    return (
        <span className={`like-btn ${isLikedMovie && 'liked'}`} data-movie-id={movieId} onClick={(e) => handleLikeBtn(e)}>
            {
                isLikedMovie
                    ? <LikeRemove />
                    : <Like />
            }
        </span>
    );
}

export {MovieLikeBtn};