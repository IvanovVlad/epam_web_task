import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticlesRepository } from './articles.repository';
import { Articles } from './articles.entity';

@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(ArticlesRepository)
        private articlesRepository: ArticlesRepository
    ) { }

    async getAll(): Promise<Articles[]> {
        return await this.articlesRepository.getAll();
    }

    async getWithContent(content: string): Promise<Articles[]> {
        return await this.articlesRepository.findAllWithContent(content);
    }

    async createArticle(content: string) {
        this.articlesRepository.createArticle(content);
    }
}
