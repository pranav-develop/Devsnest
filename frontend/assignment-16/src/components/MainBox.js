//jshint esversion: 8
import React from "react";
import EachRow from "./sub-components/EachRow";

function MainBox() {
    return (
        <div className="">
            <div className=" d-flex justify-content-center align-items-center">
                <div className="block-container w-25 h-25">
                    <EachRow starting="0" />
                    <EachRow starting="1" />
                    <EachRow starting="0" />
                    <EachRow starting="1" />
                    <EachRow starting="0" />
                    <EachRow starting="1" />
                    <EachRow starting="0" />
                    <EachRow starting="1" />
                </div>
            </div>
        </div>
    );
}

export default MainBox;
