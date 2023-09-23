import ArticleListView from "./Presentation/components/Article/ArticleList/ArticleListView";
import ArticleView from "./Presentation/components/Article/ArticleView";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<ArticleListView />} />
      <Route path="/article/:index" element={<ArticleView />} />
    </Routes>
  );
}

export default App;
