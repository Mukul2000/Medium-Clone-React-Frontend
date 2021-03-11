import React, { useState } from "react";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginURL = "https://conduit-medium-clone-api.herokuapp.com/api/users/login";

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const creds = {
            "user": {
                "email": email,
                "password": password
            }
        }
        
        axios.post(loginURL, creds)
        .then((response) => {
            console.log(response.data);
            const token = response.data.user.token;
            localStorage.setItem("token", token);
        }, (error) => {
            console.log(error);
        });
        
        
    }


    return (
        <div className="form-group">
            <h1> Please log in </h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p> Email </p>
                    <input
                        className="form-control"
                        value={email}
                        autoFocus
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" />
                </label>
                <div>
                    <label>
                        <p> Password </p>
                        <input
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password" />
                    </label>
                </div>
                <div>
                    <Button type="submit" className="btn btn-primary" disabled={!validateForm()}> Submit </Button>
                </div>
            </form>
        Sign Up
        </div>
    );
}