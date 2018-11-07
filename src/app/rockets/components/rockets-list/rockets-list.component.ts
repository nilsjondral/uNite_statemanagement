import { debounceTime, tap, switchMap } from 'rxjs/operators';
import { Rocket } from '../../models/rocket.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { rocketsQuery } from 'src/app/state/rockets.selectors';
import { SearchQueryUpdated, RocketsLoaded } from 'src/app/state/rockets.actions';
import { RocketsService } from '../../services/rockets.service';

@Component({
  selector: 'app-rockets-list',
  templateUrl: './rockets-list.component.html',
  styleUrls: ['./rockets-list.component.scss']
})
export class RocketsListComponent implements OnInit {

  private search$: BehaviorSubject<string> = new BehaviorSubject('');

  rockets$: Observable<Rocket[]>;
  searchQuery$: Observable<string>;
  loading$: Observable<boolean>;

  constructor(
    private store: Store<any>,
    private rocketsService: RocketsService) { }

  ngOnInit() {
    this.search$.pipe(debounceTime(500)).pipe(
      tap(q => this.store.dispatch(new SearchQueryUpdated(q))),
      switchMap(q => this.rocketsService.getRockets(q)))
      .subscribe(rockets => this.store.dispatch(new RocketsLoaded(rockets)));

    this.loading$ = this.store.select(rocketsQuery.getLoading);
    this.rockets$ = this.store.select(rocketsQuery.getRockets);
  }

  search(query: string) {
    this.search$.next(query);
  }
}
