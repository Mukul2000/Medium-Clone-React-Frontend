import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";
import AuthServices from "../services/auth_services"


export default function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPassword] = useState("");
    const [uname, setUname] = useState("");

    let history = useHistory();

    function validateForm() {
        return uname.length > 0 && email.length > 0 && pass.length > 0;
    }

    useEffect(() => {
        if(localStorage.getItem("user")) history.push("/");
    }, [])

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const creds = {
                "user": {
                    "username": uname,
                    "email": email,
                    "password": pass
                }
            }
            const response = await AuthServices.register(creds);
            console.log(response);
            history.push("/");
            // window.location.reload();
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="form-group">
            <h1> Please log in </h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p> Email </p>
                    <input
                        class="form-control"
                        value={email}
                        autoFocus
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" />
                </label>
                <label>
                    <p> Username </p>
                    <input
                        class="form-control"
                        value={uname}
                        autoFocus
                        onChange={(e) => setUname(e.target.value)}
                        type="text" />
                </label>
                <label>
                    <p> Password </p>
                    <input
                        class="form-control"
                        value={pass}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" />
                </label>
                <div>
                    <Button type="submit" variant="primary" disabled={!validateForm()}> Submit </Button>
                </div>
            </form>
        Sign Up
        </div>
    );
}