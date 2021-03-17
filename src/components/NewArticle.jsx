import React, { useState } from "react";
import { useHistory } from "react-router";
import Button from "react-bootstrap/Button";
import ArticleServices from "../services/article/article_services";

export default function NewArticle(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [body, setBody] = useState("");

    let history = useHistory();

    function validateForm() {
        return title.length > 5 && description.length > 20 && body.length > 50
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await ArticleServices.createArticle(title, description, body);
            history.push("/");
        }
        catch (e) {
            console.log(e);
        }

    }


    return (
        <div className="mt-4 ml-4">
            <h1> Create something </h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label> Title </label>
                    <input
                        class="form-control"
                        value={title}
                        autoFocus
                        onChange={(e) => setTitle(e.target.value)}
                        type="text" />
                </div>
                <div className="form-group">
                    <label> Description </label>
                    <input
                        class="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type="text" />
                </div>
                <div className="form-group">
                    <label> Body </label>
                    <textarea
                        class="form-control"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        type="text"
                        height = "100"
                        />
                </div>
                <div className="mb-3">
                    <Button type="submit" variant="primary" disabled={!validateForm()}> Submit </Button>
                </div>
            </form>
        </div>
    );
}