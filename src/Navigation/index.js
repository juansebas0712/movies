import React from "react";
import { NavLink } from "react-router-dom";
import { api, prettyUrl } from "../MovieContext";
import "./Navigation.scss";

function Navigation() {
    const [categories, setCategories] = React.useState([]);

    React.useEffect(() => {
        api('/genre/movie/list')
            .then(res => setCategories(res.data.genres));
    }, []);

    return (
        <nav>
            <span>Categories:</span>

            {categories && categories.map(category => (
                <NavLink to={'/movie-category/' + prettyUrl(category.name)} key={category.id} state={{
                    id: category.id,
                    name: category.name
                }} data-id={category.id}>{category.name}</NavLink>
            ))}
        </nav>
    );
}

export {Navigation};