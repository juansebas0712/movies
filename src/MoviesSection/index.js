import React from "react";
import { MovieList } from "../MovieList";
import "./MoviesSection.scss";

function MoviesSection(props) {
    return (
        <>
            <section className="movies-section">
                <h2 className="movies-section-title">{props.sectionTitle}</h2>
                <MovieList endPoint={props.endPoint} {...props} />
            </section>
        </>
    );
}

export {MoviesSection};