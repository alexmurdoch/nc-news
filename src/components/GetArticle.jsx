import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getCommentsByArticleId } from "../api";

export const GetArticle = () => {
  const [loading, setLoading] = useState(true);
  const { article_id } = useParams();

  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getArticleById(article_id).then((result) => {
      setArticle(result);
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    getCommentsByArticleId(article_id).then((result) => {
      setComments(result);
    });
  }, []);

  if (loading) {
    return <p className="loading">loading</p>;
  }
  return (
    <section>
      <h2 className="idTitle" key={article.title}>
        {article.title}
      </h2>
      <h3 className="idTopic" key={article.topic}>
        Topic: {article.topic}
      </h3>
      <h4 className="idAuthor"> By {article.author}</h4>
      <div className="idVotes">Votes: {article.votes}</div>
      <div className="idBody">{article.body}</div>
      <div className="idCreatedAt">Date: {article.created_at.slice(0, 10)}</div>
      <div className="comments">
        Comments here
        {comments.map((comment) => {
          return (
            <section>
              <div className="commentBody" key={comment.comment_id}>
                {comment.body}
              </div>
              <div className="commentAuthor">{comment.author}</div>
              <div className="commentVotes">{comment.votes}</div>
              <div className="createdAt">{comment.created_at.slice(0, 10)}</div>
            </section>
          );
        })}
      </div>
    </section>
  );
};
