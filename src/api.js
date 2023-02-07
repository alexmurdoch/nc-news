import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-project-xk2k.onrender.com/api",
});

export const fetchArticles = () => {
  return api.get("/articles").then((articles) => {
    return articles.data;
  });
};

export const getArticleById = (articleId) => {
  return api.get(`/articles/${articleId}`).then(({ data }) => {
    return data.article;
  });
};
