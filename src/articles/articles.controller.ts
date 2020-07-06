import { Controller, Get, Body, Post, ValidationPipe, BadRequestException } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Articles } from './articles.entity';
import { isUndefined } from 'util';

@Controller('articles')
export class ArticlesController {
    constructor(
        private articlesService: ArticlesService,
    ) { }

    @Get()
    GetAllArticles(): Promise<Articles[]> {
        return this.articlesService.getAll();
    }

    @Get('/find')
    getWithContent(@Body(ValidationPipe) text: Articles): Promise<Articles[]> {
        const { content } = text;

        if (!isUndefined(content) && content !== '') {
            return this.articlesService.getWithContent(content);
        } else {
            throw new BadRequestException();
        }
    }

    @Post('/create')
    CreateNewArticle(@Body(ValidationPipe) text: Articles) {
        const { content } = text;

        if (!isUndefined(content) && content !== '') {
            this.articlesService.createArticle(content);
        } else {
            throw new BadRequestException();
        }
    }
}
