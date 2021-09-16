//jshint esversion: 8
import React from "react";
import EachBlock from "./EachBlock";

function EachRow(props) {
    console.log(props.starting);

    return (
        <div className="d-flex w-100 h-100">
            <EachBlock black={props.starting === "0" ? true : false} />
            <EachBlock black={props.starting === "1" ? true : false} />
            <EachBlock black={props.starting === "0" ? true : false} />
            <EachBlock black={props.starting === "1" ? true : false} />
            <EachBlock black={props.starting === "0" ? true : false} />
            <EachBlock black={props.starting === "1" ? true : false} />
            <EachBlock black={props.starting === "0" ? true : false} />
            <EachBlock black={props.starting === "1" ? true : false} />
        </div>
    );
}

export default EachRow;
