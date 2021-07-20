//jshint esversion: 8
import React, { useState } from "react";
import EachEntry from "./sub-components/EachEntry";

function ListContainer() {
    const [itemList, setItemList] = useState([
        {
            heading: "burger",
            counter: "65",
        },
        {
            heading: "pizza",
            counter: "612",
        },
        {
            heading: "milk",
            counter: "62",
        },
        {
            heading: "chilli potato",
            counter: "25",
        },
        {
            heading: "veg roll",
            counter: "342",
        },
        {
            heading: "egg",
            counter: "123",
        },
        {
            heading: "chicken",
            counter: "67",
        },
        {
            heading: "coke",
            counter: "98",
        },
        {
            heading: "anything",
            counter: "32",
        },
    ]);

    const deleteItem = (pos) => {
        const temp = itemList;
        setItemList(
            temp.filter((item, index) => {
                return index !== pos;
            })
        );
    };

    const showItems = () => {
        return itemList.map((item, index) => {
            return <EachEntry id={index} key={index} deleteEntry={deleteItem} heading={item.heading} counter={item.counter} />;
        });
    };

    return (
        <div className="list-container container py-5 my-5">
            <div className="w-25 m-auto rounded-3 py-3">{showItems()}</div>
        </div>
    );
}

export default ListContainer;
