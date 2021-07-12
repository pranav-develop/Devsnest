//jshint esversion: 8
import React from "react";

function EachBlock(props) {
    console.log(props.black);

    return (
        <div className={props.black === true ? "bg-black col each-item " : "bg-white col each-item "}>
            <div></div>
        </div>
    );
}

export default EachBlock;
