import { Module } from '@nestjs/common';
import { SearchController } from './search.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchService } from './search.service';
import { SearchRepository } from './search.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([SearchRepository]),
  ],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
