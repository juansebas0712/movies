import React from "react";
import { ReactComponent as LikeIcon } from "../MovieLikeBtn/like.svg";
import { Link } from "react-router-dom";

import "./Favourites.scss"

function Favourites (props) {

    return (
        <div className="favourites">
            <Link to="/liked">
                <div className="wrapper">
                    <LikeIcon/>
                    <span>{props.likedMovies.length}</span>
                </div>
            </Link>
        </div>
    );
}

export {Favourites};