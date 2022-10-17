import React from "react";
import { Navigation } from "../Navigation";
import { Search } from "../Search";
import { Logo } from "../Logo";
import { Favourites } from "../Favourites";

import "./Header.scss";

function Header(props) {

    return (
        <header className="main-header">
            <div className="top">
                <div className="logo">
                    <Logo />
                </div>
                <div className="search">
                    <Search />
                </div>
                <Favourites {...props} />
            </div>
            <div className="sub-menu navigation">
                <Navigation />
            </div>
        </header>
    );
}

export {Header};