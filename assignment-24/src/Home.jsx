//jshint esversion: 8
import React, { useContext } from "react";
import { LoginContext } from "./LoginContext";

function Home() {
    const value = useContext(LoginContext);

    return (
        <div>
            <div className="page-head fs-4 py-3 fw-bold text-center ls-2">Home Page</div>
            <div className="d-flex justify-content-center">
                <button
                    onClick={() => {
                        value.changeLogin();
                        console.log("changed");
                    }}
                    className="btn btn-primary"
                >
                    {value.isLoggedin ? "Logout" : "Login"}
                </button>
            </div>
        </div>
    );
}

export default Home;
