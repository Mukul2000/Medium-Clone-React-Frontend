import React from "react";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import AuthServices from "../services/user/auth_services"
import Button from "react-bootstrap/Button";

export default function MyNav(props) {

    function handleLogOut() {
        AuthServices.logout();
        props.setLogin(false);
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Link className="mt-2" to="/">Home</Link>
                    {!props.login && <Link className="ml-2 mt-2" to={{
                        pathname: "/login",
                        loginStat: {
                            setLogin: props.setLogin
                        }
                    }}> Log In</Link>}
                    {props.login && <Link className="ml-5 mt-2" to = {{ pathname: "/create"}}> New Article </Link>}
                    {props.login && <Button className="ml-5" onClick = {handleLogOut}> Log Out </Button>}
                </Nav>
            </Navbar>
        </div>
    );
}