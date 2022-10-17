import React from "react";
import {Link} from "react-router-dom";
import { CallToAction } from "../CallToAction";
import { prettyUrl } from "../MovieContext";
import { api } from "../MovieContext";
import "./MovieSlider.scss";

function MovieSlider(props) {
    const [movies, setMovies] = React.useState(null);

    React.useEffect(() => {
        api(props.endPoint)
            .then(res => {
                setMovies(res.data.results);
            })
    }, [props.endPoint])

    return (
        <>
            <section className="slider movies-section">

                {movies && movies.map(movie => (

                    <div className="slide" key={movie.id}>
                    <Link to={`movie/${prettyUrl(movie.original_title)}`} state={{ id: movie.id,name: movie.original_title}}>
                        <div className="wrapper">
                            <div className="image">
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} />
                                <div className="overlay"></div>
                            </div>
                            
                            <div className="top">
                                <h3>Trending movies</h3>
                                <h2>
                                    {movie.original_title.length > 25
                                        ? movie.original_title.substring(0,25) + '...'
                                        : movie.original_title
                                    }
                                </h2>
                                <p>
                                    {movie.overview.length > 300
                                        ? movie.overview.substring(0,250) + '...'
                                        : movie.overview
                                    }
                                </p>
                            </div>
                            <div className="bottom">
                                <CallToAction text={`View More`} url={'#'} />
                            </div>
                        </div>
                    </Link>
                </div>

                ))}
                
            </section>
        </>
    );
}

export {MovieSlider};