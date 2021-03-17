import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";
import AuthServices from "../services/user/auth_services"
import {Link} from "react-router-dom";


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
        <div className="mt-4 ml-4">
                <h1> Sign Up </h1>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label> Username </label>
                    <input
                        class="form-control"
                        value={uname}
                        onChange={(e) => setUname(e.target.value)}
                        type="text"
                        placeholder="Enter username"
                    />
                    </div>
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
        <Link to ="/login"> Log In </Link>
       
        </div>
    );
}