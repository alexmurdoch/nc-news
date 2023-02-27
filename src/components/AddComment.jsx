import { postComment } from "../api";
import { useState } from "react";

export const AddComment = ({ articleId, setComments, comments }) => {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(articleId, newComment).then((a, b, c) => {
      setComments([
        ...comments,
        {
          article_id: articleId,
          author: "grumpy19",
          body: newComment,
          comment_id: -1,
          created_at: new Date().toISOString(),
          votes: 0,
        },
      ]);
    })
    .catch((error) => {
      console.error("Error while posting comment:", error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button id="postCommentButton" type="submit">Post Comment</button>
    </form>
  );
};
