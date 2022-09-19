import React from "react";
import "./Logo.scss";
import {ReactComponent as LogoImage } from "./Logo.svg";

function Logo() {
    return (
        <>
            <LogoImage />
            <span>
                React Movies
            </span>
        </>
    );
}

export {Logo};