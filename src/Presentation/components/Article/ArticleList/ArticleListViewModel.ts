import { useState } from "react";
import ArticleAPIDataSourceImpl from "../../../../Data/DataSource/API/ArticleAPIDataSource";
import { ArticleRepositoryImpl } from "../../../../Data/Repository/ArticleRepositoryImpl";
import { Article } from "../../../../Domain/Model/Article";
import { GetArticles } from "../../../../Domain/UseCase/Article/GetArticles";
import { GetArticleByIndex } from "../../../../Domain/UseCase/Article/GetArticleByIndex";

export default function ArticleListViewModel() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [article, setArticle] = useState<Article>();

  const articlesDataSourceImpl = new ArticleAPIDataSourceImpl();
  const articlesRepositoryImpl = new ArticleRepositoryImpl(
    articlesDataSourceImpl
  );

  const getArticlesUseCase = new GetArticles(articlesRepositoryImpl);
  const getArticleByIndexUseCase = new GetArticleByIndex(
    articlesRepositoryImpl
  );

  async function getArticles() {
    setArticles(await getArticlesUseCase.invoke());
  }

  async function getArticleByIndex(i: number) {
    setArticle(await getArticleByIndexUseCase.invoke(i));
  }

  return {
    getArticles,
    getArticleByIndex,
    articles,
    article,
  };
}
