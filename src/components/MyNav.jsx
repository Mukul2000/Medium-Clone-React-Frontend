import React from "react";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function MyNav(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Link to="/">Home</Link>
                    {!props.login && <Link to={{
                        pathname: "/login",
                        loginStat: {
                            setLogin: props.setLogin
                        }
                    }}> Log In</Link>}
                    {props.login && <Link to = {{ pathname: "/create"}}> New Article </Link>}
                </Nav>
            </Navbar>
        </div>
    );
}