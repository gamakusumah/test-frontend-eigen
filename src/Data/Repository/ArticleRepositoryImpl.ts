import { ArticleRepository } from "../../Domain/Repository/ArticleRepository";
import ArticleDataSource from "../DataSource/ArticleDataSource";

export class ArticleRepositoryImpl implements ArticleRepository {
  dataSource: ArticleDataSource;

  constructor(_datasource: ArticleDataSource) {
    this.dataSource = _datasource;
  }

  async getArticles() {
    return this.dataSource.getArticles();
  }
  async getArticleByIndex(i: number) {
    return this.dataSource.getArticleByIndex(i);
  }
}
