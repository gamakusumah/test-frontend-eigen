import { useEffect } from "react";
import useViewModel from "./ArticleListViewModel";
import { Col, Row } from "antd";
import ArticleCardView from "../../ArticleCard/ArticleCardView";

export default function ArticleListView() {
  const { getArticles, articles } = useViewModel();

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <Row
      gutter={[16, 24]}
      style={{
        maxWidth: 1050,
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: 50,
        paddingBottom: 50,
      }}
    >
      {articles.map((article, i) => (
        <Col span={8} key={i} className="gutter-row">
          <ArticleCardView
            index={i}
            imgSrc={article.urlToImage}
            publishedAt={article.publishedAt}
          >
            <ArticleCardView.Header>{article.title}</ArticleCardView.Header>
            <ArticleCardView.Body>{article.description}</ArticleCardView.Body>
          </ArticleCardView>
        </Col>
      ))}
    </Row>
  );
}
