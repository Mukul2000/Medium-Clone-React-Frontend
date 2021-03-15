import React from "react";

export default function Article(props) {

    function displayNotes(props) {
        const articles = props.articles;
        if (articles.length > 0) {
            return (
                articles.map((article, index) => {
                    return (
                        <div class="card text-white bg-dark mb-3">
                            <div class="card-header"><h2>{article.title}</h2></div>
                            <div class="card-body">
                                <h5 class="card-title">{article.description}</h5>
                                <p class="card-text text-white">{article.body}</p>
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