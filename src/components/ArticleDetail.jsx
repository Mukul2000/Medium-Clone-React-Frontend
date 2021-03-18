import React from "react";
import { Link } from "react-router-dom";

export default function ArticleDetail(props) {
    const article = props.location.article;
    console.log(article);
    return (
        <div className="card text-center">
            <div className="card-header">
                <h1> {article.title} </h1>
            </div>
            <div className="card-body">
                <h5 className="card-title text-muted text-left">{article.description} --{article.author.username}</h5>
                <h5><p className="card-text">{article.body}</p></h5>
            </div>
        </div>


    )
}