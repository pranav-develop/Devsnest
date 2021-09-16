//jshint esversion: 8
import React from "react";
import useFetch from "./useFetch";

export default function Memes() {
    const { data, isLoading, error } = useFetch("https://api.imgflip.com/get_memes");

    return (
        <div>
            <div>movies list:</div>
            <div>
                {isLoading
                    ? "loading"
                    : data.data.memes.map((meme) => {
                          return <h1>{meme.name}</h1>;
                      })}
            </div>
        </div>
    );
}
