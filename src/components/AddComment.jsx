import { postComment } from "../api";
import { useState } from "react";

export const AddComment = ({ articleId }) => {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(articleId, newComment).then(() => {
      window.location.reload();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button type="submit">Post Comment</button>
    </form>
  );
};
