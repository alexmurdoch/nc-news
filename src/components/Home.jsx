import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import { useParams } from "react-router-dom";
import { Link, Routes, Route } from "react-router-dom";

export const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams()
  useEffect(() => {
    fetchArticles().then(({ articles }) => {
      setArticles(articles);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <p className="loading">loading</p>;
  }

  return (
    <main>
      <h2 className="ArticlesH2"> Articles</h2>
      <ol className="articles">
        {articles.map((article) => {
          return (
            <div className="listItems" key={article.article_id}>
            

              <Link to={`/articles/${article.article_id}`} className="articleName" > {article.title}</Link>
             
              <div className="author"> {article.author}</div>
            </div>
          );
        })}
      </ol>
    </main>
  );
};
