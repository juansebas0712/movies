import React from "react";
import { MovieContext } from "../MovieContext";
import { MovieCard } from "../MovieCard";
import "./MovieList.scss";

function MovieList(props) {
    const {apiCall} = React.useContext(MovieContext);

    const [movies, setMovies] = React.useState(null);

    React.useEffect(() => {
        apiCall(props.endPoint)
            .then(response => setMovies(response.data.results));
    }, []);

    console.log(movies);
    if (!movies) return "No post!";

    return (
        <>
            <div className="movie-list">
                {movies.map(movie => (<MovieCard key={movie.id} movie={movie} />))}
            </div>
        </>
    );
}

export {MovieList};