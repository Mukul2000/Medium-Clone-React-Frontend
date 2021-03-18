import React, { useEffect, useState } from "react";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from "./MyNav";
import NewArticle from "./NewArticle";
import ArticleDetail from "./ArticleDetail";



function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('user')) setLoggedIn(true);
    },[])
    

    return (
        <Router>
                <div className="container-fluid">
                    <MyNav login={loggedIn} setLogin = {setLoggedIn} /> 
                </div> 
                    <Switch>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/" exact component={Home}/>
                        <Route path="/register" exact component={SignUp}/>
                        <Route path="/create" exact component={NewArticle}/>
                        <Route path="/article/:slug" exact component={ArticleDetail} />
                    </Switch>
        </Router>
    );
}

export default App;