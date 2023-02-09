import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Filter } from "./components/Filter";
import { Home } from "./components/Home";
import { GetArticle } from "./components/GetArticle";

function App() {
  return (
    <div className="App">
      <h1 className="h1">NC NEWS</h1>
      <Filter></Filter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<GetArticle />} />
      </Routes>
    </div>
  );
}

export default App;
