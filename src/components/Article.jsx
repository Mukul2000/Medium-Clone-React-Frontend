import React from "react";
import { Link } from "react-router-dom";

export default function Article(props) {

    let body = props.body;
    if(props.body.length > 100) {
        body = body.substr(0,50) + "...";
    }

    return (
        <div className="card text-blue bg-light mb-3">
            <div className="d-flex flex row ml-2">
                <div className="card-header p-2">
                    <Link to={{
                        pathname: "/article/" + props.slug,
                    }}>
                        <h2>{props.title}</h2>
                    </Link>
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.description}</h5>
                <p className="card-text text-white">{body}</p>
            </div>

        </div>
    )


}