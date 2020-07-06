import { Controller, Get, Req } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
    constructor(
        private searchService: SearchService
    ) { }

    @Get()
    searchInGoogle(@Req() req) {
        return this.searchService.searchInGoogle(req.query);
    }
}
