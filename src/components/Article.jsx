import React from "react";

export default function Article(props) {

    function displayNotes(props) {
        const articles = props.articles;
        if (articles.length > 0) {
            return (
                articles.map((article, index) => {
                    return (
                        <div class="card text-white bg-dark mb-3">
                            <div className="card-header row">
                                <h2 className="text-left">{article.title}</h2>
                                <div className="text-right"> 
                                    {article.author}
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{article.description}</h5>
                                <p className="card-text text-white">{article.body}</p>
                            </div>
                        </div>
                    )
                })
            );
        }
        else {
            return (<h3>No articles yet</h3>)
        }
    }

    return (
        <div>
            {displayNotes(props)}
        </div>
    )

}