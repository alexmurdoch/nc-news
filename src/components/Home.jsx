import { useEffect, useState } from "react";
import { fetchArticles, fetchTopics } from "../api";
import "./css/Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topic, setTopic] = useState(null);
  const [topicList, setTopicList] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [order, setOrder] = useState("desc");
  useEffect(() => {
    fetchArticles(topic, sortBy, order).then(({ articles }) => {
      setArticles(articles);
      setLoading(false);
    });
  }, [topic, sortBy, order]);

  useEffect(() => {
    fetchTopics().then((result) => {
      setTopicList(result);
    });
  }, []);

  if (loading) {
    return (
      <p key="loading" className="loading">
        loading
      </p>
    );
  }
  function changeOrder() {
    if (order === "desc") {
      setOrder("asc");
    } else {
      setOrder("desc");
    }
  }

  return (
    <main>
      <section className="arrange">
        <p>Topics: </p>
        {topicList.map((topic) => {
          return (
            <button key={topic.slug} onClick={() => setTopic(topic.slug)}>
              {topic.slug}
            </button>
          );
        })}
      </section>
      <section className="arrange" key="buttonList">
        <p>Sort by:</p>
        <button onClick={() => setSortBy("author")}>Author</button>
        <button onClick={() => setSortBy("created_at")}>Date</button>
        <button onClick={() => setSortBy("votes")}>Votes</button>
        <button onClick={() => changeOrder()}>{order + `ending`}</button>
      </section>

      <h2 className="ArticlesH2"> Featured Articles</h2>
      <ol className="articles" key={1}>
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
              <div className="votes">Upvotes: {article.votes}</div>
            </div>
          );
        })}
      </ol>
    </main>
  );
};
