import { Article } from "../../Model/Article";
import { ArticleRepository } from "../../Repository/ArticleRepository";

export interface GetArticlesUseCase {
  invoke: () => Promise<Article[]>;
}

export class GetArticles implements GetArticlesUseCase {
  private articleRepo: ArticleRepository;
  constructor(_articleRepo: ArticleRepository) {
    this.articleRepo = _articleRepo;
  }

  async invoke() {
    return this.articleRepo.getArticles();
  }
}
