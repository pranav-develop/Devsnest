//jshint esversion: 8
import React from "react";
import { Link } from "react-router-dom";

function EachMeme(props) {
    return (
        <div className="eachMeme offset-1 offset-sm-0 col-10 col-sm-6 col-lg-4 p-5">
            <Link
                to={{
                    pathname: props.id,
                    state: {
                        position: props.number,
                    },
                }}
            >
                <img src={props.url} alt="meme" width="100%" height="100%" />
            </Link>
        </div>
    );
}

export default EachMeme;
