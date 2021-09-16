//jshint esversion: 8
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateName, updateEmail } from "./actions";

function Input() {
    const dispatch = useDispatch();
    const name = useSelector((store) => store.name);
    const email = useSelector((store) => store.email);

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === "name") {
            dispatch(updateName(value));
        } else if (name === "email") {
            dispatch(updateEmail(value));
        }
    };

    return (
        <div>
            <div className="text-center heading">Input</div>
            <div className="input">
                <input type="text" name="name" placeholder="Name" value={name} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" value={email} onChange={handleChange} />
            </div>
        </div>
    );
}

export default Input;
