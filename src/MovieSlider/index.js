import React from "react";
import {Link} from "react-router-dom";
import { MovieContext } from "../MovieContext";
import { CallToAction } from "../CallToAction";
import { prettyUrl } from "../MovieContext";
import "./MovieSlider.scss";

function MovieSlider(props) {
    const {apiCall} = React.useContext(MovieContext);
    const [movies, setMovies] = React.useState(null);

    React.useEffect(() => {
        apiCall(props.endPoint)
            .then(res => {
                setMovies(res.data.results);
            })
    }, [])

    return (
        <>
            <section className="slider movies-section">

                {movies && movies.map(movie => (

                    <div className="slide" key={movie.id}>
                    <Link to={`movie/${prettyUrl(movie.original_title)}`} state={{ id: movie.id,name: movie.original_title}}>
                        <div className="wrapper">
                            <div className="image">
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
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
                                <CallToAction url={'#'} />
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