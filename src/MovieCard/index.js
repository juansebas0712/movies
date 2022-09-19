import React from "react";
import "./MovieCard.scss";

function MovieCard(props) {
    const {poster_path, original_title, overview, vote_average, id} = props.movie;
    const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;

    //console.log(props);
    
    return (
        <>
            <div className="movieCard" style={{backgroundImage: 'url(' + poster + ')'}}>
                <div className="fade"></div>
                <div className="movie-content">
                    <h3>{original_title} - {vote_average.toFixed(1)}</h3>
                    <p>{overview}</p>
                </div>
            </div>
        </>
    );
}

export {MovieCard};