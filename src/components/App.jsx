import React from "react";
import Home from "./Home";
import Login from "./Login/Login";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";



function App() {
    return (
        <Router>
            <div className="container">
                <div className="container-fluid">
                    <Navbar bg="dark" variant="dark">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>s
                            <Nav.Link href="/Login">Log In</Nav.Link>
                        </Nav>
                    </Navbar>
                    <Switch>
                        <Route path="/Login">
                            <Login />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;