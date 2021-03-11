import React, {useState} from "react";

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
        <div className="Login">
        <h1> Please log in </h1>
        <form onSubmit={handleSubmit}> 
            <label>
                <p> Email </p>
                <input 
                value = {email}
                autoFocus
                onChange={(e) => setEmail(e.target.value)} 
                type="email"/>
            </label>
            <label>
                <p> Password </p>   
                <input 
                value = {pass}
                onChange={(e) => setPassword(e.target.value)}
                type="password"/>
            </label>
            <div>
            <button type="submit" disabled={!validateForm()}> Submit </button>
            </div>
        </form>
        </div>
    );
}