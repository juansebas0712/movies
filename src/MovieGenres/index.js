import React from "react";
import { api, prettyUrl } from "../MovieContext";
import { Link } from "react-router-dom";
import "./MovieGenres.scss";

function MovieGenres(props) {
    const [genres, SetGenres] = React.useState(null);

    React.useEffect(() => {
        api('/genre/movie/list')
            .then(call => SetGenres(call.data.genres));
    }, [])

    return (
        <>
        <section className="movies-section">
            {!genres && 'Cargando...'}

            <h2>{props.sectionTitle}</h2>

            <div className="movie-genres">
                {genres && genres.map(genre => (
                    <Link key={genre.id} to={`movie-category/${prettyUrl(genre.name)}`} state={
                        {
                            name: genre.name,
                            id: genre.id
                        }
                        } >
                        
                            <div className="wrapper">
                                {genre.name}
                            </div>
                        
                    </Link>
                ))}
            </div>
        </section>
        </>
    );
}

export {MovieGenres};