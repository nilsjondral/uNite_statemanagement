import { debounceTime, switchMap, share, mapTo, shareReplay } from 'rxjs/operators';
import { Rocket } from '../../models/rocket.model';
import { Observable, BehaviorSubject, merge } from 'rxjs';
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

  private search$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(
    private rocketsService: RocketsService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit() {
      const startSearch = this.search$.pipe(debounceTime(500));
      this.rockets$ = startSearch.pipe(
        switchMap(query => this.rocketsService.getRockets(query)),
        shareReplay(1));
      this.loading$ = merge(
        startSearch.pipe(mapTo(true)),
        this.rockets$.pipe(mapTo(false)));
    }

    search(query: string) {
      this.search$.next(query);
    }
}
