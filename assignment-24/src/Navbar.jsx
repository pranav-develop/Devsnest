//jshint esversion: 8
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="nav py-4 w-100">
            <div className="container">
                <div className="d-flex justify-content-around">
                    <NavLink className="text-decoration-none fw-bold fs-6 ls-1 color-white" to="/">
                        Home
                    </NavLink>
                    <NavLink className="text-decoration-none fw-bold fs-6 ls-1 color-white" to="/about">
                        About
                    </NavLink>
                    <NavLink className="text-decoration-none fw-bold fs-6 ls-1 color-white" to="/profile">
                        Profile
                    </NavLink>
                    <NavLink className="text-decoration-none fw-bold fs-6 ls-1 color-white" to="/private">
                        Private Page
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
