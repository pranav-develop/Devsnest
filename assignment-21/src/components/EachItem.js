//jshint esversion: 8
import React from "react";

function EachItem(props) {
    return (
        <div className="each-item px-5 py-2">
            <div className="px-5 py-4 bg-white rounded-3">
                <div className="item-head fs-5 fw-bold">{props.name}</div>
                <div className="item-calory py-4">
                    <span className="fs-6 fw-bold">Calorie: </span>
                    <span className="fs-6 ps-1">{props.count}</span>
                </div>
                <div className="item-buttons d-flex">
                    <div
                        onClick={() => {
                            props.deleteItem(props.pos);
                        }}
                        className="delete-button btn btn-danger form-control me-2"
                    >
                        Delete
                    </div>
                    <div
                        onClick={() => {
                            props.showModel(props.pos);
                        }}
                        className="edit-button btn btn-primary form-control ms-2"
                    >
                        Edit
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EachItem;
