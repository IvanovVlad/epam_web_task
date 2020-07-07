import { Controller, Get, Req } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchItem } from './search.entity';

@Controller('search')
export class SearchController {
    constructor(
        private searchService: SearchService
    ) { }

    @Get()
    searchInGoogle(@Req() req): Promise<SearchItem[]> {
        return this.searchService.searchInGoogle(req.query.query);
    }

    @Get('/db')
    getFromDb(): Promise<SearchItem[]> {
        return this.searchService.getFromDb();
    }
}
