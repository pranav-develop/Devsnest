//jshint esversion: 8
import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { LoginContext } from "./LoginContext";

function Private() {
    const value = useContext(LoginContext);

    const showContent = () => {
        return (
            <div>
                <div className="page-head fs-4 py-3 fw-bold text-center ls-2">Private Page{value.isLoggedin}</div>
            </div>
        );
    };

    return <div>{value.isLoggedin ? showContent() : <Redirect to="/" />}</div>;
}

export default Private;
