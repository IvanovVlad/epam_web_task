import { EntityRepository, Repository } from "typeorm";
import { Articles } from "./articles.entity";

@EntityRepository(Articles)
export class ArticlesRepository extends Repository<Articles> {
    async getAll(): Promise<Articles[]> {
        return await this.find();
    }

    async createArticle(content: string): Promise<void> {
        const a = new Articles();
        a.content = content;
        a.save();
    }

    async findAllWithContent(content): Promise<Articles[]> {
        var data = await this
                  .createQueryBuilder("articles")
                  .where("LOWER(articles.content) LIKE LOWER(:c)", {c: `%${content}%` })
                  .getMany();
        return data;
    }
}
