import React from "react";
import { Header } from "../../Header";
import { callConfig, prettyUrl } from "../../MovieContext";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import "./SingleMovie.scss";

function SingleMovie() {
    const [movie, setMovie] = React.useState(null);
    const movieParams = useLocation()

    React.useEffect(() => {
        console.log(movieParams);
        callConfig(`/movie/${movieParams.state.id}`)
            .then(res => {
                setMovie(res.data);
            })
    }, []);

    return (
        <>
            {!movie && 'Loading movie'}

            <Header />
            <section className="single-movie movies-section">
                <div className="wrapper">
                    <div className="left">
                        <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} />
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
                            <h3>Budget:</h3>
                            <p>{movie?.budget}</p>
                            <h3>Revenue:</h3>
                            <p>{movie?.revenue}</p>
                            <h3>Website:</h3>
                            <p><a href={movie?.homepage} target="_blank">{movie?.homepage}</a></p>
                            <h3>Production Companies:</h3>
                            <div className="logos">
                                {movie?.production_companies.map(company => {
                                    if (company.logo_path) {
                                        return <img src={`https://image.tmdb.org/t/p/w500${company?.logo_path}`} />
                                    }
                                })}
                            </div>
                            <h3>Categories:</h3>
                            <div className="categories">
                                {movie?.genres.map(genre => (
                                    <Link to={`/movie-category/${prettyUrl(genre.name)}`} state={{id: genre.id}}>
                                        {genre.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        
                    </div>
                </div>
            </section>
            
        </>
    );
}

export {SingleMovie};