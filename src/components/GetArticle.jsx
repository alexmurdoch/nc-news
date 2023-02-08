import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import { GetComments } from "./GetComments";

export const GetArticle = () => {
  const [loading, setLoading] = useState(true);
  const { article_id } = useParams();

  const [article, setArticle] = useState([]);

  useEffect(() => {
    getArticleById(article_id).then((result) => {
      setArticle(result);
      setLoading(false);
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
        <GetComments />
      </div>
    </section>
  );
};
