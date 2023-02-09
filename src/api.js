import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-project-xk2k.onrender.com/api",
});

export const fetchArticles = ( topic) => {
  
  return api.get("/articles", {params: {
    topic: topic,
    
  }}).then(({ data }
) => {
    return data;
  });
};

export const getArticleById = (articleId) => {
  return api.get(`/articles/${articleId}`).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsByArticleId = (articleId) => {
  return api.get(`/articles/${articleId}/comments`).then(({ data }) => {
    return data[0];
  });
};

export const patchVotes = (articleId, votes) => {
  const patchBody = {
    inc_votes: votes,
  };
  return api.patch(`/articles/${articleId}`, patchBody);
};

export const postComment = (articleId, comment) => {
  const newComment = {
    username: "grumpy19",
    body: comment
  };
  return api.post(`/articles/${articleId}/comments`, newComment);
};

export const fetchTopics = () => {
   return api.get(`/topics`).then(({data})=>{
  
    return data.topics
   })
}