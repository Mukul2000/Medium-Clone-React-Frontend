import React, { useState } from "react";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import "./NavBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import NavBar from "./NavBar";



function App() {
    const [token, setToken] = useState("");

    return (
        <Router>
                <div>
                    <NavBar 
                        token = {token}
                        setToken = {setToken}
                    />
                    <Switch>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/" exact component={Home}/>
                        <Route path="/signup" exact component={SignUp}/>            
                    </Switch>
                </div>
        </Router>
    );
}

export default App;