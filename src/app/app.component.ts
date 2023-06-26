import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages: {
    pageid: number;
    title: string;
    snippet: string;
  }[] = [];

  constructor(private wikiService: WikipediaService) {}

  onTerm(term: string) {
    this.wikiService.search(term).subscribe((data) => {
      this.pages = data;
    });
  }
}

// https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space
