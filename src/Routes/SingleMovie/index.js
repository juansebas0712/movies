import React from "react";
import { Header } from "../../Header";
import { api, prettyUrl } from "../../MovieContext";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import "./SingleMovie.scss";

function SingleMovie() {
    const [movie, setMovie] = React.useState(null);
    const movieParams = useLocation()

    React.useEffect(() => {
        api(`/movie/${movieParams.state.id}`)
            .then(res => {
                setMovie(res.data);
            })
    }, [movieParams]);

    const formatter = new Intl.NumberFormat('us', {
        style: "currency",
        currency: "USD"
    });

    return (
        <>

            {!movie && 'Loading movie'}

            {movie && (
                <>
                    <Header />
                    <section className="single-movie movies-section">
                        <div className="wrapper">
                            <div className="left">
                                <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={movie.original_title}/>
                            </div>
                            <div className="center">
                                <h1>{movie?.original_title}</h1>
                                <h2>{movie?.tagline}</h2>
                                <p className="description">{movie?.overview}</p>

                                <div className="meta">
                                    <h3>Score:</h3>
                                    <p>{movie?.vote_average.toFixed(1)}</p>
                                    <h3>Release Date:</h3>
                                    <p>{movie?.release_date}</p>

                                    {movie.budget > 0 && (
                                        <>
                                            <h3>Budget:</h3>
                                            <p>{formatter.format(movie.budget)}</p>
                                        </>
                                    )}
                                    
                                    {movie.revenue > 0 && (
                                        <>
                                            <h3>Revenue:</h3>
                                            <p>{formatter.format(movie.revenue)}</p>
                                        </>
                                    )}
                                    
                                    <h3>Website:</h3>
                                    <p><a href={movie?.homepage} target="_blank" rel="noreferrer">{movie?.homepage}</a></p>
                                    <h3>Production Companies:</h3>
                                    <div className="logos">
                                        {movie?.production_companies.map(company => {
                                            if (company.logo_path) {
                                                return <img key={company.logo_path} src={`https://image.tmdb.org/t/p/w500${company.logo_path}`} alt={company.name}/>
                                            }
                                        })}
                                    </div>
                                    <h3>Categories:</h3>
                                    <div className="categories">
                                        {movie?.genres.map(genre => (
                                            <Link key={genre.name} to={`/movie-category/${prettyUrl(genre.name)}`} state={{id: genre.id, name:genre.name}}>
                                                {genre.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    );
}

export {SingleMovie};