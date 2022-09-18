import React from "react";
import {Navigation} from "../Navigation";
import {Search} from "../Search";
import {Logo} from "../Logo";

import "./Header.scss";

function Header() {
    return (
        <header className="main-header">
            <div className="logo">
                <Logo />
            </div>
            <div className="navigation">
                <Navigation />
                <Search />
            </div>
        </header>
    );
}

export {Header};