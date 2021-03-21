import React, { useEffect, useState } from "react";
import ArticleServices from "../services/article/article_services";

export default function ArticleDetail(props) {
    const [article, setArticle] = useState();
    const slug = props.match.params.slug;

    let loggedin_id = "";
    if (localStorage.getItem('user'))
        loggedin_id = JSON.parse(localStorage.getItem('user'))._id;

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const response = await ArticleServices.getBySlug(slug);
        setArticle(response.article);
    }




    if (!article) {
        return <div> Loading... </div>
    }
    else {
        return (
            <div>
            <div className="card text-center">
                <div className="card-header">
                    <h1> {article.title} </h1>
                    <h6 className="text-right"> {article.author.username} </h6>
                </div>
                <div className="card-body">
                    <h5 className="card-title text-muted text-left">{article.description}</h5>
                    <h5><p className="card-text">{article.body}</p></h5>
                </div>
            </div>
            {(loggedin_id === article.author._id) && <div className="p-2 btn btn-warning ml-2"> Update </div>}
                {(loggedin_id === article.author._id) && <div className="p-2 btn btn-danger ml-2"> Delete </div>}
            </div>
        )
    }
}