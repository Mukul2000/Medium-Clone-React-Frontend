import React from "react";
import Axios from "Axios";

export default async function Home() {

    const articles = await Axios.get("localhost:4000/api/articles");
    console.log(articles);
    
}

Home();