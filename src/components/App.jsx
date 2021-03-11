import React from "react";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
    return (
        <Router>
                <div className="container-fluid">
                    <Navbar bg="dark" variant="dark">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/login">Log In</Nav.Link>
                        </Nav>
                    </Navbar>
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