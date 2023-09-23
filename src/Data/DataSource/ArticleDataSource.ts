import { Article } from "../../Domain/Model/Article";

export default interface ArticleDataSource {
  getArticles(): Promise<Article[]>;
  getArticleByIndex(i: number): Promise<Article>;
}
