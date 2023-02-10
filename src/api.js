import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-project-xk2k.onrender.com/api",
});

export const fetchArticles = (topic, sortBy, order) => {
  return api
    .get("/articles", {
      params: {
        topic: topic,
        sort_by: sortBy,
        order: order,
      },
    })
    .then(({ data }) => {
      return data;
    }).catch((error) => {
      console.error(error);
      return error;
      });
};

export const getArticleById = (articleId) => {
  return api.get(`/articles/${articleId}`).then(({ data }) => {
    return data.article;
  }).catch((error) => {
    console.error(error);
    return error;
    });
};

export const getCommentsByArticleId = (articleId) => {
  return api.get(`/articles/${articleId}/comments`).then(({ data }) => {
    return data[0];
  }).catch((error) => {
    console.error(error);
    return error;
    });
};

export const patchVotes = (articleId, votes) => {
  const patchBody = {
    inc_votes: votes,
  };
  return api.patch(`/articles/${articleId}`, patchBody).catch((error) => {
    console.error(error);
    return error;
    });
};

export const postComment = (articleId, comment) => {
  const newComment = {
    username: "grumpy19",
    body: comment,
  };
  return api.post(
    `/articles/${articleId}/comments`,
    newComment
  )
  .catch((error) => {
    console.error(error);
    return error;
    });
};

export const fetchTopics = () => {
  return api.get(`/topics`).then(({ data }) => {
    return data.topics;
  }).catch((error) => {
    console.error(error);
    return error;
    });
};

export const removeComments = (commentId) => {
  return api.delete(`/comments/${commentId}`)
  .catch((error) => {
    console.error(error);
    return error;
    });
};
