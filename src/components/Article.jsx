import React from "react";
import Button from "react-bootstrap/Button";

export default function Article(props) {
    let loggedin_id;

    if (localStorage.getItem('user'))
        loggedin_id = JSON.parse(localStorage.getItem('user'))._id;
    else loggedin_id = "mumbojumbo";
    
    return (
        <div className="card text-white bg-dark mb-3">
            <div className="d-flex flex row ml-2">
                <div className="card-header p-2">
                    <h2>{props.title}</h2>
                </div>
                {loggedin_id == props.author._id && <div className="p-2 btn btn-warning ml-2"> Update </div>}
                {loggedin_id == props.author._id && <div className="p-2 btn btn-danger ml-2"> Delete </div>}
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.description}</h5>
                <p className="card-text text-white">{props.body}</p>
            </div>

        </div>
    )


}