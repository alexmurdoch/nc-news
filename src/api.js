import axios from "axios"

const api = axios.create({
    baseURL: "https://nc-news-project-xk2k.onrender.com/api"
})

export const fetchArticles = () => {
    return api.get("/articles").then((articles)=> {
        console.log(articles.data);
        return articles.data
    })
}
