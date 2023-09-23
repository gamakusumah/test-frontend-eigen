import { Article } from "../../../Domain/Model/Article";
import { ArticleAPIEntity } from "../Entity/ArticleAPIEntity";
import ArticleDataSource from "../ArticleDataSource";
import axios from "axios";

export default class ArticleAPIDataSourceImpl implements ArticleDataSource {
  async getArticles(): Promise<Article[]> {
    const url =
      "https://newsapi.org/v2/everything?q=tesla&from=2023-08-23&sortBy=publishedAt&apiKey=d5d970bb2f8847eabef877291df02c49";
    const response = await axios.get<ArticleAPIEntity>(url);

    return response.data.articles;
  }

  async getArticleByIndex(i: number): Promise<Article> {
    const url =
      "https://newsapi.org/v2/everything?q=tesla&from=2023-08-23&sortBy=publishedAt&apiKey=d5d970bb2f8847eabef877291df02c49";
    const response = await axios.get<ArticleAPIEntity>(url);
    const articles: Article[] = response.data.articles;
    const article = articles[i];
    return article;
  }
}
