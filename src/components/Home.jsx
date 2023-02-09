import { useEffect, useState } from "react";
import { fetchArticles, fetchTopics } from "../api";

import { Link } from "react-router-dom";

export const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topic, setTopic] = useState(null);
  const [topicList, setTopicList] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  useEffect(() => {
    fetchArticles(topic, sortBy).then(({ articles }) => {
      setArticles(articles);
      setLoading(false);
    });
  }, [topic, sortBy]);

  useEffect(() => {
    fetchTopics().then((result) => {
      console.log(result);
      setTopicList(result);
    });
  }, []);

  if (loading) {
    return <p className="loading">loading</p>;
  }

  return (
    <main>
      <h2 className="ArticlesH2"> Articles</h2>
      <section className="topicsList"> 
      <p>Topics: </p> 
        {topicList.map((topic) => {
          return (
            <button onClick={() => setTopic(topic.slug)}>{topic.slug}</button>
          );
        })}
      </section>
      <section>
        <p>Sort by:</p>
        <button onClick={()=> setSortBy("author")}>Author</button>
        <button onClick={()=> setSortBy("created_at")}>Date</button>
        <button onClick={()=> setSortBy("votes")}>Votes</button>
      </section>

      <ol className="articles">
        {articles.map((article) => {
          return (
            <div className="listItems" key={article.article_id}>
              <Link
                to={`/articles/${article.article_id}`}
                className="articleName"
              >
                {" "}
                {article.title}
              </Link>

              <div className="author"> {article.author}</div>
              <div className="votes">{article.votes}</div>
            </div>
          );
        })}
      </ol>
    </main>
  );
};
