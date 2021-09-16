//jshint esversion: 8
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function MemeEditor(props) {
    const { memeId } = useParams();
    const { position } = props.location.state;
    const [itemData, setItemsData] = useState({});
    const [inputTexts, setInputTexts] = useState({});

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((response) => response.json())
            .then((data) => {
                console.log(data.data.memes[position]);
                setItemsData(data.data.memes[position]);
            });
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputTexts((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const getMeme = () => {
        let boxes = [];

        for (let i = 0; i < itemData.box_count; i++) {
            boxes.push({ text: inputTexts[`input${i}`] });
        }
        let url = `https://api.imgflip.com/caption_image?template_id=${memeId}&username=bocavoc&password=bocavoc@123`;
        boxes.map((box, index) => {
            console.log(box);
            url += `&boxes[${index}][text]=${box.text}`;
        });
        console.log(url);
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                setItemsData((prev) => {
                    return {
                        ...prev,
                        url: data.data.url,
                    };
                });
            });
    };

    const showTextBoxes = () => {
        let temp = [];
        for (let i = 0; i < itemData.box_count; i++) {
            temp.push(i);
        }
        return temp.map((item, index) => {
            return (
                <input
                    key={index}
                    type="text"
                    name={`input${index}`}
                    className="form-control mx-3"
                    placeholder={`Text ${index + 1}`}
                    value={inputTexts ? inputTexts[index] : ""}
                    onChange={handleChange}
                />
            );
        });
    };

    return (
        <div className="editor container">
            <div className="container">
                <div className="image d-flex justify-content-center pt-5 pb-3">
                    <img src={itemData.url} alt="meme" height="500px" />
                </div>
                <div className="text-box d-flex">{showTextBoxes()}</div>
                <div className="d-flex justify-content-center py-4">
                    <button
                        className="btn btn-primary ml-4"
                        onClick={() => {
                            getMeme();
                        }}
                    >
                        GetMeme
                    </button>
                    <Link to="/">
                        <button className="btn ms-4 btn-outline-primary">Select Template</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MemeEditor;
