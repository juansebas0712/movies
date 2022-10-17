import React from "react";
import { Header} from "../../Header";
import { MovieCard } from "../../MovieCard";
import { api } from "../../MovieContext";

function LikedMovies(props) {
    const [movies, setMovies] = React.useState([]);

    let observer = new IntersectionObserver(el => {
        el.forEach(card => {
        
            if (card.isIntersecting) {
                const source = card.target.getAttribute('data-image');
                card.target.style.backgroundImage = `url(${source}), url('https://via.placeholder.com/200x300?text=Missing Image')`;
            }
        });
    });

    React.useEffect(() => {

        Promise.all(props.likedMovies.map(async(movieId) => {
            return await api(`/movie/${movieId}`);
        }))
            .then(res => {
                const moviesCall = [];

                res.forEach(movie => moviesCall.push(movie.data));

                setMovies(moviesCall);
            });

        
    },[props.likedMovies]);

    return (
        <>
            <Header {...props} />
            <section className="movies-section movies-category">
                
                <h2 className="section-title">Liked Movies</h2>

                {movies.length === 0 && <p>No Liked movies yet :(</p>}

                {movies.length > 0 && movies.map( (movie, i) => {
                    const lastElement = movies.length === i + 1;

                    return <MovieCard key={movie.id} movie={movie} observer={observer} lastElement={lastElement} likedMovies={props.likedMovies} setLikedMovies={props.setLikedMovies} />
                })}
                
            </section>
        </>
    );
}

export {LikedMovies};