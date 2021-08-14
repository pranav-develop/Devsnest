//jshint esversion: 8
import React, { useState, createContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = (props) => {
    const [isLoggedin, setIsLoggedin] = useState(false);

    const changeLogin = () => {
        const loginStatus = isLoggedin;
        setIsLoggedin(!loginStatus);
    };

    return <LoginContext.Provider value={{ isLoggedin, changeLogin }}>{props.children}</LoginContext.Provider>;
};
