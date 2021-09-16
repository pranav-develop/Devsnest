//jshint esversion: 8
import React, { useState } from "react";
import "./App.css";
import MainTopBar from "./components/MainTopBar";
import EachItem from "./components/EachItem";
import ModelBox from "./components/sub-components/ModelBox";

function App() {
    const [items, setItems] = useState([]);

    const [modelData, setModelData] = useState({
        name: "",
        count: "",
        key: "",
    });

    const [modelView, setModeView] = useState(false);

    const handleModelClose = () => {
        setModeView(false);
    };
    const handleModelShow = (pos) => {
        console.log("pos " + pos);
        console.log(items[pos].name);
        setModelData({
            ...modelData,
            name: items[pos].name,
            count: items[pos].count,
            key: pos,
        });
        setModeView(true);
        console.log(modelData);
    };

    const addItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const updateItems = (data, pos) => {
        const temp = items;
        temp[pos].name = data.name;
        temp[pos].count = data.count;
        setItems(temp);
        setModeView(false);
    };

    const deleteItem = (pos) => {
        const temp = items.filter((item, index) => {
            return index !== pos;
        });
        console.log(temp);
        setItems(temp);
    };

    const showItems = () => {
        return items.map((eachItem, index) => {
            return (
                <EachItem
                    key={index}
                    pos={index}
                    name={eachItem.name}
                    count={eachItem.count}
                    deleteItem={deleteItem}
                    showModel={handleModelShow}
                />
            );
        });
    };

    return (
        <div className="App">
            <div className="container">
                <MainTopBar addItem={addItem} />
                <div className="items-container w-50 px-5 m-auto">{showItems()}</div>
            </div>
            <ModelBox
                data={modelData}
                show={modelView}
                handleShow={handleModelShow}
                handleClose={handleModelClose}
                updateItems={updateItems}
            />
        </div>
    );
}

export default App;
