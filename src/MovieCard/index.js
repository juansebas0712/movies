import React, { useRef } from "react";
import "./MovieCard.scss";

function MovieCard(props) {
    const {poster_path, original_title, overview, vote_average, release_date, id} = props.movie;
    const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;
    const card = useRef(null);

    React.useEffect(() => {
        props.observer.observe(card.current);
        //console.log(card)
    }, [])

    //console.log(props);
    //backgroundImage: 'url(' + poster + ')'
    
    return (
        <>
            <div className="movieCard" data-image={poster} ref={card}>
                <div className="fade"></div>
                <div className="movie-content">
                    <h3>{original_title} - {vote_average.toFixed(1)}</h3>
                    <p>{overview}</p>
                    <p>{release_date}</p>
                </div>
            </div>
        </>
    );
}

export {MovieCard};