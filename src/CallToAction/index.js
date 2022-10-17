import React from "react";
import {ReactComponent as ArrowRight} from "./arrowRight.svg";
import "./CallToAction.scss";

function CallToAction(props) {
    return (
        <>
            <a href={props.url} className="cta">
                <div className="cta__wrapper">
                    <span className="text">
                        {props.text && props.text}
                    </span>
                    <span className="icon">
                        <ArrowRight />
                    </span>
                </div>
            </a>
        </>
    );
}

export {CallToAction};