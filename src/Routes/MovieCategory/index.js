import React from "react";
import { useParams  } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { callConfig } from "../../MovieContext";
import { MovieCard } from "../../MovieCard";
import { Header } from "../../Header";

import "./MovieCategory.scss";

function MovieCategory() {
    const location = useLocation();
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
        callConfig(`/discover/movie?with_genres=${location.state.id}`)
            .then(res => {
                setMovies(res.data.results);
            })
    }, []);

    return (
        <>
            <Header />
            <section className="movies-section movies-category">
                
                <h2 className="section-title">Category: {location.state.name}</h2>
                {movies && movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} observer={imageObserver} />
                ))}
                
            </section>
        </>
    );
}

export {MovieCategory};