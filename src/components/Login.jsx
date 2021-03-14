import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";
import AuthServices from "../services/user/auth_services"


export default function Login(props) {
    const [email, setEmail] = useState("");
    const [pass, setPassword] = useState("");

    let history = useHistory();

    useEffect(() => {
        if(localStorage.getItem("user")) history.push("/");
    }, [])

    function validateForm() {
        return email.length > 0 && pass.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const creds = {
                "user": {
                    "email": email,
                    "password": pass
                }
            }
            const response = await AuthServices.login(creds);
            localStorage.setItem("user", JSON.stringify(response.user));
            props.location.loginStat.setLogin(true);
            history.push("/");
            window.location.reload();
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