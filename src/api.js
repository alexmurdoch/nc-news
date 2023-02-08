import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-project-xk2k.onrender.com/api",
});

export const fetchArticles = () => {
  return api.get("/articles").then(({data}) => {
    return data;
  });
};

export const getArticleById = (articleId) => {
  return api.get(`/articles/${articleId}`).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsByArticleId = (articleId) => {
    return api.get(`/articles/${articleId}/comments`).then(({data})=> {

        return data[0] 
    })
}