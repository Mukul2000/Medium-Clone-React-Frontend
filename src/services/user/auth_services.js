import axios from "axios";

const API_URL = "http://conduit-medium-clone-api.herokuapp.com/api/";

async function login(email, pass) {
    const user_creds = {
        "user": {
            "email": email,
            "password": pass
        }
    }
    const response = await axios.post(API_URL+"users/login", user_creds);
    return response.data;
}

async function register(signup_creds) {
    const response = await axios.post(API_URL+"users", signup_creds);
    return response.data;
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
}

function logout() {
    localStorage.removeItem("user");
}



const AuthServices = {
    login,
    register,
    getCurrentUser,
    logout
}

export default AuthServices;