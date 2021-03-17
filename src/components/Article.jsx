import React from "react";

export default function Article(props) {

    return (
        <div className="card text-white bg-dark mb-3">
            <div className="card-header">
                <h2>{props.title}</h2>
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.description}</h5>
                <p className="card-text text-white">{props.body}</p>
            </div>
        </div>
    )


}