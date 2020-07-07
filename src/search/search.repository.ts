import { EntityRepository, Repository } from "typeorm";
import { SearchItem } from "./search.entity";
import fetch from 'node-fetch';

@EntityRepository(SearchItem)
export class SearchRepository extends Repository<SearchItem> {
    async getSearch(query: string): Promise<SearchItem[]> {
        const apiKey = 'AIzaSyBm6RLacTpdSuE1yRmiNv76Tmuke3Bmljc';
        const customSearch = '011350286766329159636:z2i5nh3iwow';
        const request = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${customSearch}&q=${query}&lr=lang_ru`;

        try {
            const responce = await fetch(encodeURI(request),
                {
                    method: 'GET',
                    redirect: 'follow'
                })
            const json = await responce.json();
            const { items } = json;
            return items;
        } catch (err) {
            throw new Error(err);
        }
    }

    async getFromDb(): Promise<SearchItem[]> {
        return await this.find();
    }
}