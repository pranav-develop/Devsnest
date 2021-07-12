//jshint esversion: 8
import React from "react";

function EachEntry(props) {
    return (
        <div className="each-entry m-auto my-3 p-3">
            <div className="fs-4 fw-bold">{props.heading}</div>
            <div className="fs-6">you have consumed {props.counter} calories</div>
        </div>
    );
}

export default EachEntry;
