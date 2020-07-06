import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticlesRepository } from './articles.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ArticlesRepository]),
  ],
  controllers: [ArticlesController],
  providers: [ArticlesService]
})
export class ArticlesModule { }
