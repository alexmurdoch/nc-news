import { useEffect, useState } from "react";
import { fetchArticles } from "../api";

export const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

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
              <div className="articleName"> {article.title}</div>
              <div className="author"> {article.author}</div>
            </div>
          );
        })}
      </ol>
    </main>
  );
};
