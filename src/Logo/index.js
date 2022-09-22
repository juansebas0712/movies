import React from "react";
import { Link } from "react-router-dom";
import "./Logo.scss";
import {ReactComponent as LogoImage } from "./Logo.svg";

function Logo() {
    return (
        <>
            <Link to={'/'}>
                <LogoImage />
                <span>
                    React Movies
                </span>
            </Link>
        </>
    );
}

export {Logo};