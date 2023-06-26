import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface WikiResponse {
  query: {
    search: {
      pageid: number;
      title: string;
      snippet: string;
    }[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    return this.http
      .get<WikiResponse>('https://en.wikipedia.org/w/api.php?', {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          utf8: '1',
          srsearch: term,
          origin: '*',
        },
      })
      .pipe(map((data) => data.query.search));
  }
}
