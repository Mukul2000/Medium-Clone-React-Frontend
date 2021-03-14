import axios from "axios";
import authHeader from "../user/auth_header";

const API_URL = "http://conduit-medium-clone-api.herokuapp.com/api/";

async function createArticle(title, description, body) {
    const article = {
        headers: authHeader(),
        article: {
            title: title,
            description: description,
            body: body,
        }
    }
    console.log(article);
    const response = await axios.post(API_URL + "articles",article);
    console.log(response);
    return response.data;
}

export default {
    createArticle
}