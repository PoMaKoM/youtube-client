import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { SearchResponse } from 'src/app/models/search-response.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  public posts: SearchResponse;
  public querySubscription: Subscription;

  constructor(
    public searchService: SearchService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.querySubscription = this.route.queryParams.subscribe(
      (queryParams: Params) => {
        if (queryParams.search) {
          this.posts = this.searchService.searchPosts();
        } else {
          this.posts = null;
        }
      }
    );
  }
}
