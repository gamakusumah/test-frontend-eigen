import { Article } from "../../Model/Article";
import { ArticleRepository } from "../../Repository/ArticleRepository";

export interface GetArticleByIndexUseCase {
  invoke: (i: number) => Promise<Article>;
}

export class GetArticleByIndex implements GetArticleByIndexUseCase {
  private articleRepo: ArticleRepository;
  constructor(_articleRepo: ArticleRepository) {
    this.articleRepo = _articleRepo;
  }

  async invoke(i: number) {
    return this.articleRepo.getArticleByIndex(i);
  }
}
