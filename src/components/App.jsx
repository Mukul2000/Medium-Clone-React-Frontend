import React from "react";
import Login from "./Login/Login";
import Axios from "axios";

function App() {

    const getArticles = () => {
        // Axios.get("localhost:3000/api/articles").then(response  => {
        //     console.log(response);
        // });

        Axios.get("https://official-joke-api.appspot.com/random_joke").then(response  => {
            console.log(response);
        });

    }

return (
    <div className="container">
        <button onClick={getArticles}> Get stuff </button>
        
    </div>
);
}

export default App;