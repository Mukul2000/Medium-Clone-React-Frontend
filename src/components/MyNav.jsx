import React from "react";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import AuthServices from "../services/user/auth_services"

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
                    {!props.login && <Link className="btn btn-primary ml-4" to={{
                        pathname: "/login",
                        loginStat: {
                            setLogin: props.setLogin
                        }
                    }}> Log In</Link>}
                    {!props.login && <Link className="btn btn-primary ml-4" to="/register"> Register</Link>}
                    {props.login && <Link className="btn btn-primary ml-5" to="/create"> New Article </Link>}
                    {props.login && <div className="btn ml-4" onClick={handleLogOut}> Log Out </div>}
                </Nav>
            </Navbar>
        </div>
    );
}