import React, {useState} from "react";
import SignUp from "./SignUp";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";


export default function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && pass.length > 0;      
    }

    function handleSubmit(event) {
        console.log(email);
        console.log(pass);
        event.preventDefault();
    }

    return (
        <div className="form-group">
        <h1> Please log in </h1>
        <form onSubmit={handleSubmit}> 
            <label>
                <p> Email </p>
                <input 
                class="form-control"
                value = {email}
                autoFocus
                onChange={(e) => setEmail(e.target.value)} 
                type="email"/>
            </label>
            <label>
                <p> Password </p>   
                <input 
                class="form-control"
                value = {pass}
                onChange={(e) => setPassword(e.target.value)}
                type="password"/>
            </label>
            <div>
            <Button type="submit" variant="primary" disabled={!validateForm()}> Submit </Button>
            </div>
        </form>
        Sign Up
        </div>
    );
}