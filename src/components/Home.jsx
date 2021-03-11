import React, { useEffect, useState } from "react";
import Article from "./Article";
import axios from "axios";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

export default function Home() {
    const [articles, setArticles] = useState([]);
    const fetchURL = "https://conduit-medium-clone-api.herokuapp.com/api/articles";

    useEffect(()=> {
        getData();
    }, [])

    const getData = () => axios.get(fetchURL).then((response) => setArticles(response.data[0]));



    return (
        <div>
            <Jumbotron fluid>
                <h1 className="display-1 text-center">Conduit</h1>
                <p className="lead text-center">
                    What's your story today?
                </p>
                <p className="text-center">
                    <Button variant="primary">Explore</Button>
                </p>
            </Jumbotron>
            <Article articles={articles} />
        </div>
    );
}