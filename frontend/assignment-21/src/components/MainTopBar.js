//jshint esversion: 8
import React, { useState } from "react";

function MainTopBar(props) {
    const [data, setData] = useState({
        name: "",
        count: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "name") {
            setData((prevData) => {
                return {
                    ...prevData,
                    name: value,
                };
            });
        } else if (name === "count") {
            setData((prevData) => {
                return {
                    ...prevData,
                    count: value.toString(),
                };
            });
        }
    };

    const addNewItem = () => {
        if (data.name.trim() !== "" && data.count.trim() !== "") {
            props.addItem(data);
            setData({
                name: "",
                count: "",
            });
        } else alert("Filed is empty" + data.name.trim() + data.count.trim());
    };

    return (
        <div className="top-bar w-50 px-5 m-auto py-5">
            <div className="input-container px-5 d-flex">
                <input
                    onChange={handleChange}
                    className="form-control w-75 me-2 py-2 px-3"
                    name="name"
                    type="text"
                    placeholder="Item Name"
                    value={data.name}
                />
                <input
                    onChange={handleChange}
                    className="form-control w-25 ms-2 py-2 px-3"
                    name="count"
                    type="number"
                    placeholder="Amount"
                    value={data.count}
                />
            </div>
            <div className="submit-button px-5">
                <button onClick={addNewItem} className="btn btn-primary py-2 px-3 form-control mt-3">
                    Add Item
                </button>
            </div>
        </div>
    );
}

export default MainTopBar;
