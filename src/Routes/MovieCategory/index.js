import React from "react";
import { useLocation } from "react-router-dom";
import { api, prettyUrl } from "../../MovieContext";
import { MovieCard } from "../../MovieCard";
import { Header } from "../../Header";
import { Loading } from "../../Loading";

import "./MovieCategory.scss";

function MovieCategory() {
    let location = useLocation();
    const [movies, setMovies] = React.useState([]);
    const [pageNumber, setPageNum] = React.useState(1);
    const [loading, setLoading] = React.useState(false);

    let observer = new IntersectionObserver(el => {
        el.forEach(card => {
        
            if (card.isIntersecting) {
                const source = card.target.getAttribute('data-image');
                card.target.style.backgroundImage = `url(${source})`;

                if ( card.target.dataset.lastElement === 'true' ) {
                    setPageNum(prev => prev + 1);
                    setLoading(true);
                }
            }
        });
    });

    React.useEffect(() => {
        api('/discover/movie', {
            params: {
                with_genres: location.state.id,
                page: pageNumber
            }
        })
            .then(res => {
                setLoading(false);
                setMovies(loadedMovies => {
                    return [...loadedMovies, ...res.data.results]
                });
            })
    }, [pageNumber, location]);

    React.useEffect(() => {
        setMovies([]);
        setPageNum(1)
    }, [location])

    return (
        <>
            <Header />
            <section className="movies-section movies-category">
                
                <h2 className="section-title">Category: {location.state.name}</h2>

                {movies && movies.map( (movie, i) => {
                    const lastElement = movies.length === i + 1;

                    return <MovieCard key={`${prettyUrl(location.state.name)}-${movie.id}`} movie={movie} observer={observer} lastElement={lastElement} />
                })}

                {loading && <Loading/>}
                
            </section>
        </>
    );
}

export {MovieCategory};