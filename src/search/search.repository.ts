import { EntityRepository, Repository } from "typeorm";
import { SearchItem } from "./search.entity";
import fetch from 'node-fetch';

@EntityRepository(SearchItem)
export class SearchRepository extends Repository<SearchItem> {
    async getSearch(query: string): Promise<SearchItem[]> {
        const apiKey = 'AIzaSyBm6RLacTpdSuE1yRmiNv76Tmuke3Bmljc';
        const params = '017576662512468239146:omuauf_lfve';

        try {
            const responce = await fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${params}&q=${query}`,
                {
                    method: 'GET',
                    redirect: 'follow'
                })
            const json = await responce.json();
            const { items } = json;
            return items;
        } catch(err) {
            throw new Error(err);
        }
    }
}