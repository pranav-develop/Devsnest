//jshint esversion: 8
import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function ModelBox(props) {
    const [data, setData] = useState({
        name: "",
        count: "",
    });

    useEffect(() => {
        setData({
            name: props.data.name,
            count: props.data.count,
        });
    }, [props]);

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
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            props.updateItems(data, props.data.key);
                        }}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModelBox;
