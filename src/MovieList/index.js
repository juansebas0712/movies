import React from "react";
import { MovieContext } from "../MovieContext";
import { MovieCard } from "../MovieCard";
import "./MovieList.scss";

function MovieList(props) {
    const {apiCall} = React.useContext(MovieContext);
    const [movies, setMovies] = React.useState(null);

    let imageObserver = new IntersectionObserver(card => {
        card.forEach(image => {
        
          if (image.isIntersecting) {
                let source = image.target.getAttribute('data-image');
                image.target.style.backgroundImage = `url(${source})`;
            }
        });
    });

    React.useEffect(() => {
        apiCall(props.endPoint)
            .then(response => setMovies(response.data.results));
    }, []);

    if (!movies) return "No post!";

    return (
        <>
            <div className="movie-list">
                {movies.map(movie => (<MovieCard key={movie.id} movie={movie} observer={imageObserver} />))}
            </div>
        </>
    );
}

export {MovieList};