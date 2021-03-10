import React from "react";

export default function Article(props) {

    function displayNotes(props) {
        const articles = props.articles;
        if (articles.length > 0) {
        return (
            articles.map((article,index) => {
                console.log(article);
                return (
                    <div className='article' key = {article._id}>
                        <h2 className='display2'> {article.title} </h2>
                        <h4 className='display3'> {article.description} </h4> 
                        <p className='lead'> {article.body} </p> 
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