import axios from "axios";
import authHeader from "../user/auth_header";

const API_URL = "https://conduit-medium-clone-api.herokuapp.com/api/";

async function createArticle(title, description, body) {
    const article = {
        article: {
            title: title,
            description: description,
            body: body,
        }
    }
    
    const hedconfig = {
        headers:authHeader()
    }
    const response = await axios.post(API_URL + "articles", article, hedconfig);
    return response.data;
}

async function getBySlug(slug) {
    const response = await axios.get(API_URL + "articles/" + slug);
    return response.data;
}

const ArticleServices = {
    createArticle,
    getBySlug
}

export default ArticleServices;