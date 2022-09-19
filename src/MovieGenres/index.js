import React from "react";
import { MovieContext } from "../MovieContext";
import "./MovieGenres.scss";

function MovieGenres(props) {
    const {apiCall} = React.useContext(MovieContext);
    const [genres, SetGenres] = React.useState(null);

    React.useEffect(() => {
        apiCall('/genre/movie/list')
            .then(call => SetGenres(call.data.genres));
    }, [])

    return (
        <>
        {console.log(genres)}
        <section className="movies-section">
            {!genres && 'Cargando...'}

            <h2>{props.sectionTitle}</h2>

            <div className="movie-genres">
                {genres && genres.map(genre => (
                    <a key={genre.id} href="#">
                        <div className="wrapper">
                            {genre.name}
                        </div>
                    </a>
                ))}
            </div>
        </section>
        </>
    );
}

export {MovieGenres};