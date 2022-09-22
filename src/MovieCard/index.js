import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { prettyUrl } from "../MovieContext";
import "./MovieCard.scss";

function MovieCard(props) {
    const {poster_path, original_title, overview, vote_average, release_date, id} = props.movie;
    const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;
    const card = useRef(null);

    React.useEffect(() => {
        props.observer.observe(card.current);
    }, [])
    
    return (
        <>
            <div className="movieCard" data-image={poster} ref={card}>
                <Link to={`/movie/${prettyUrl(original_title)}`} state={{
                        id: id,
                        name: original_title
                    }}>
                    <div className="fade"></div>
                    <div className="movie-content">
                        <h3>{original_title} - {vote_average.toFixed(1)}</h3>
                        <p>
                            {
                                overview.length > 200 
                                    ? overview.substring(0, 200) + '...'
                                    : overview
                            }
                        </p>
                    </div>
                </Link>
            </div>
        </>
    );
}

export {MovieCard};