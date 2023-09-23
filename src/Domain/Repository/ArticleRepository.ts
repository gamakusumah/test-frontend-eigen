import { Article } from "../Model/Article";

export interface ArticleRepository {
  getArticles(): Promise<Article[]>;
  getArticleByIndex(i: number): Promise<Article>;
}
