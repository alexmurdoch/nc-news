import { removeComments } from "../api";
import { useState, useEffect } from "react";

export const DeleteComment = (props) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (loading) {
      setMessage("Comment deleted Successfully!!");
    }
  }, [loading]);

  const handleSubmit = (e) => {
    e.preventDefault();

    removeComments(props.commentId).then(() => {
      setLoading(true);
      props.setComments(
        props.comments.filter(
          (comment) => comment.comment_id !== props.commentId
        )
      );
      setLoading(false);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button onClick={handleSubmit} type="submit">
          {" "}
          Delete
        </button>
      </form>
      {message && <p>{message}</p>}
    </>
  );
};
