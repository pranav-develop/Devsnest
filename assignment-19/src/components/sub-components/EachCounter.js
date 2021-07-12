//jshint esversion: 8
import React, { useState } from "react";

function EachCounter() {
    const [value, setValue] = useState(0);

    const handleChange = () => {
        const temp = value;
        setValue(temp + 1);
    };

    return (
        <div onClick={handleChange} className="eachCounter">
            {value}
        </div>
    );
}

export default EachCounter;
