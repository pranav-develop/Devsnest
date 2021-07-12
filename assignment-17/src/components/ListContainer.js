//jshint esversion: 8
import React from "react";
import EachEntry from "./sub-components/EachEntry";

function ListContainer() {
    return (
        <div className="list-container container py-5 my-5">
            <div className="w-25 m-auto rounded-3 py-3">
                <EachEntry heading="burger" counter="65" />
                <EachEntry heading="pizza" counter="125" />
                <EachEntry heading="milk" counter="45" />
                <EachEntry heading="chilli potato" counter="65" />
                <EachEntry heading="chowmin" counter="85" />
                <EachEntry heading="veg roll" counter="45" />
                <EachEntry heading="egg" counter="45" />
                <EachEntry heading="chicken" counter="13" />
                <EachEntry heading="coke" counter="79" />
                <EachEntry heading="pasta" counter="34" />
                <EachEntry heading="anything" counter="49" />
            </div>
        </div>
    );
}

export default ListContainer;
