import { Injectable } from '@nestjs/common';
import { SearchRepository } from './search.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { SearchItem } from './search.entity';

@Injectable()
export class SearchService {
    constructor(
        @InjectRepository(SearchRepository)
        private searchRepository: SearchRepository,
    ) { }

    async searchInGoogle(query: string): Promise<SearchItem[]> {
        const items = await this.searchRepository.getSearch(query);
        const sa = [];
        this.searchRepository.clear();
        
        items.forEach(i => {
            const searchItem = new SearchItem();
            searchItem.link = i.link;
            searchItem.snippet = i.snippet;
            searchItem.title = i.title;
            sa.push(searchItem);
            this.searchRepository.save(searchItem);
        });

        return sa;
    }

    async getFromDb(): Promise<SearchItem[]> {
        return await this.searchRepository.getFromDb();
    }
}
