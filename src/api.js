export const fetchArticles = (topic, sortBy) => {
  return api
    .get("/articles", {
      params: {
        topic: topic,
        sort_by: sortBy,
      },
    })
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getArticleById = (articleId) => {
  return api
    .get(`/articles/${articleId}`)
    .then(({ data }) => {
      return data.article;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCommentsByArticleId = (articleId) => {
  return api
    .get(`/articles/${articleId}/comments`)
    .then(({ data }) => {
      return data[0];
    })
    .catch((error) => {
      console.log(error);
    });
};

export const patchVotes = (articleId, votes) => {
  const patchBody = {
    inc_votes: votes,
  };
  return api.patch(`/articles/${articleId}`, patchBody).catch((error) => {
    console.log(error);
  });
};

export const postComment = (articleId, comment) => {
  const newComment = {
    username: "grumpy19",
    body: comment,
  };
  return api
    .post(`/articles/${articleId}/comments`, newComment)
    .catch((error) => {
      console.console.log(error);
    });
};

export const fetchTopics = () => {
  return api
    .get(`/topics`)
    .then(({ data }) => {
      return data.topics;
    })
    .catch((error) => {
      console.console.log(error);
    });
};

export const removeComments = ({ commentId }) => {
  console.log(commentId);
  return api.delete(`/comments/${commentId}`).catch((error) => {
    console.console.log(error);
  });
};
