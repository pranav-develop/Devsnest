//jshint esversion: 8
import React from "react";
import { useSelector } from "react-redux";

function Data() {
    const name = useSelector((store) => store.name);
    const email = useSelector((store) => store.email);

    return (
        <div className="text-center">
            <div className="heading text-center">Data</div>
            <div className="text-center">Name: {name}</div>
            <div className="text-center">Email: {email} </div>
        </div>
    );
}

export default Data;
