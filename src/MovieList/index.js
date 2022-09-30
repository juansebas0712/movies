import React from "react";
import { api, todayDate } from "../MovieContext";
import { MovieCard } from "../MovieCard";
import "./MovieList.scss";

function MovieList(props) {
    const [movies, setMovies] = React.useState([]);
    const [pageNumber, setPageNum] = React.useState(1);

    const observer = new IntersectionObserver(el => {
        el.forEach(card => {
        
          if (card.isIntersecting) {
                const source = card.target.getAttribute('data-image');
                card.target.style.backgroundImage = `url(${source})`;

                if (card.target.dataset.lastElement === 'true') {
                    setPageNum((prev) => prev + 1);
                }

                if (observer.current) observer.current.disconnect();
            }
        });
    });

    React.useEffect(() => {
        api(props.endPoint, {
            params: {
                "page": pageNumber,
                "release_date.lte": todayDate(),
                "include_video": true
            }
        })
            .then(response => setMovies((loadedMovies) => [...loadedMovies, ...response.data.results] ));
    }, [pageNumber]);

    if (!movies) return "No post!";

    return (
        <>
            <div className="movie-list">
                {movies.map( (movie, i) => {
                        const isLastElement = movies.length === i + 1;

                        return <MovieCard key={movie.id} movie={movie} observer={observer} lastElement={isLastElement} />                        
                    }
                )}
            </div>
        </>
    );
}

export {MovieList};