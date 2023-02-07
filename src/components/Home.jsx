import { useEffect, useState } from "react";
import { fetchArticles } from "../api";

export const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then(({articles}) => {
      console.log(articles, "<<");
      setArticles(articles);
    });
  }, []);

  return (
    <main>
      <h2 className="ArticlesH2"> Articles</h2>
      <ol className="articles">
        {articles.map((article) => {
          return (
            <div className="listItems" key= {article.article_id} >
              <div className="articleName"> {article.title}</div>
              <div className="author"> {article.author}</div>
            </div>
          );
        })}
      </ol>
    </main>
  );
};
