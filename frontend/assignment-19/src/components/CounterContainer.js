//jshint esversion: 8
import React from "react";
import EachCounter from "./sub-components/EachCounter";

function CounterContainer() {
    return (
        <div className="container">
            <div className="heading">Counter</div>
            <div className="d-flex">
                <EachCounter />
                <EachCounter />
                <EachCounter />
                <EachCounter />
            </div>
        </div>
    );
}

export default CounterContainer;
