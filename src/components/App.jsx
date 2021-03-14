import React, { useState } from "react";
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



function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <Router>
                <div className="container-fluid">
                    <MyNav login={loggedIn} setLogin = {setLoggedIn} /> 
                </div> 
                <div className="container">
                    <Switch>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/" exact component={Home}/>
                        <Route path="/register" exact component={SignUp}/>
                    </Switch>
                </div>
        </Router>
    );
}

export default App;