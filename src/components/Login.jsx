import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";
import AuthServices from "../services/user/auth_services"
import { Link } from "react-router-dom";

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [pass, setPassword] = useState("");

    let history = useHistory();

    useEffect(() => {
        if (localStorage.getItem("user")) history.push("/");
    }, [])

    function validateForm() {
        return email.length > 0 && pass.length > 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await AuthServices.login(email, pass);
            localStorage.setItem("user", JSON.stringify(response.user));
            props.location.loginStat.setLogin(true);
            history.push("/");
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="mt-4 ml-4">
                <h1> Please log in </h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                    <label> Email </label>
                    <input
                        class="form-control"
                        value={email}
                        autoFocus
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter email"
                    />
                    </div>
                    <div className="form-group">
                    <label> Password </label>
                    <input
                        class="form-control"
                        value={pass}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Enter password"
                    />
                    </div>
                    <div className="mb-3">
                        <Button type="submit" variant="primary" disabled={!validateForm()}> Submit </Button>
                    </div>
                </form>
        <Link to ="/register"> Sign Up </Link>
       
        </div>
    );
}