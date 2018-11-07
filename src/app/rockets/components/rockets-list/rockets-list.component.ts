import { debounceTime, tap, switchMap, share } from 'rxjs/operators';
import { Rocket } from '../../models/rocket.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { rocketsQuery } from 'src/app/state/rockets.selectors';
import { SearchQueryUpdated, RocketsLoaded } from 'src/app/state/rockets.actions';
import { RocketsService } from '../../services/rockets.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rockets-list',
  templateUrl: './rockets-list.component.html',
  styleUrls: ['./rockets-list.component.scss']
})
export class RocketsListComponent implements OnInit {
  rockets$: Observable<Rocket[]>;
  loading$: Observable<boolean>;
  searchQuery$: Observable<string>;

  constructor(
    private store: Store<any>,
    private rocketsService: RocketsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.store.dispatch(new RocketsLoaded([]));

    const currentQuerry = this.route.snapshot.queryParams['q'];
    this.store.dispatch(new SearchQueryUpdated(currentQuerry));
    this.searchQuery$ = this.store.select(rocketsQuery.getQuery);
    this.searchQuery$.subscribe(q => {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: {
          ...this.route.snapshot.queryParams,
          q: q
        }
      });
    });

    this.searchQuery$.pipe(
      debounceTime(500),
      switchMap(q => this.rocketsService.getRockets(q)))
      .subscribe(rockets => this.store.dispatch(new RocketsLoaded(rockets)));

    this.loading$ = this.store.select(rocketsQuery.getLoading);
    this.rockets$ = this.store.select(rocketsQuery.getRockets);
  }

  search(query: string) {
    this.store.dispatch(new SearchQueryUpdated(query));
  }
}
