//jshint esversion: 8

import React, { useEffect, useState } from "react";
import EachMeme from "./sub-components/EachMeme";

function MemeContainer() {
    const [memeData, setMemeData] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((response) => response.json())
            .then((data) => {
                setMemeData(data.data.memes);
            });
    }, []);

    return (
        <div className="meme-container">
            <div className="row">
                {memeData.length <= 0
                    ? ""
                    : memeData.map((meme, index) => {
                          return <EachMeme key={meme.id} id={meme.id} url={meme.url} number={index} />;
                      })}
            </div>
        </div>
    );
}

export default MemeContainer;
