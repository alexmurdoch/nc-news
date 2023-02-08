import {getCommentsByArticleId} from "../api"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const GetComments = () => {
    const { article_id } = useParams();
    const [comments, setComments] = useState([]);
    useEffect(() => {
        getCommentsByArticleId(article_id).then((result) => {
          setComments(result);
        });
      }, []);
    return (
    <ul>

        {comments.map((comment) => {
            return (
            <section key = {comment.comment_id}>
              <p className="commentBody" >
                {comment.body}
              </p>
              <p className="commentAuthor">{comment.author}</p>
              <p className="commentVotes">{comment.votes}</p>
              <p className="createdAt">{comment.created_at.slice(0, 10)}</p>
            </section>
          );
        })
}</ul>)
}