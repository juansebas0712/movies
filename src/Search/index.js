import React from "react";
import "./Search.scss";

function Search() {
    return (
        <div className="search-wrapper">
            <input type="text" id="search" placeholder="Search..." />
        </div>
    );
}

export {Search};