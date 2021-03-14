import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";
import ArticleServices from "../services/article/article_services";

export default function Login(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [body,setBody] = useState("");

    let history = useHistory();

    function validateForm() {
        return title.length > 5 && description.length > 20 && body.length > 50
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
        const response = await ArticleServices.createArticle(title,description,body);
        }
        catch(e) {
            console.log(e);
        }
        
    }

    
    return (
        <div className="form-group">
            <h1> Write something </h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p> Title </p>
                    <input
                        class="form-control"
                        value={title}
                        autoFocus
                        onChange={(e) => setTitle(e.target.value)}
                        type="text" />
                </label>
                <label>
                    <p> Description </p>
                    <input
                        class="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type="text" />
                </label>
                <label>
                    <p> Body </p>
                    <input
                        class="form-control"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        type="text" />
                </label>
                <div>
                    <Button type="submit" variant="primary" disabled={!validateForm()}> Submit </Button>
                </div>
            </form>
        Sign Up
        </div>
    );
}