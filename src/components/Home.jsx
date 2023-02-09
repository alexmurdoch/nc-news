import { useEffect, useState } from "react";
import { fetchArticles, fetchTopics } from "../api";

import { Link } from "react-router-dom";

export const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topic, setTopic] = useState(null);
  const [topicList, setTopicList] = useState(null);

  useEffect(() => {
    fetchArticles(topic).then(({ articles }) => {
      setArticles(articles);
      setLoading(false);
    });
  }, [topic]);

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
      <section className="topicsList">{topicList.map((topic)=> {
        return (
         
          <button onClick={() => setTopic(topic.slug)}>{topic.slug}</button>
         
        )
      })}
      
      
      
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
            </div>
          );
        })}
      </ol>
    </main>
  );
};
