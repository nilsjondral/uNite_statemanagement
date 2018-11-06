import { ActivatedRoute } from '@angular/router';
import { switchMap, shareReplay, mapTo, take, debounceTime } from 'rxjs/operators';
import { Rocket } from '../../models/rocket.model';
import { Observable, BehaviorSubject, merge } from 'rxjs';
import { RocketsService } from '../../services/rockets.service';
import { Component, OnInit } from '@angular/core';

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

  constructor(private rocketsService: RocketsService, private route: ActivatedRoute) { }

  ngOnInit() {
    const startSearch = this.search$.pipe(debounceTime(500));
    this.rockets$ = startSearch.pipe(switchMap(query => this.rocketsService.getRockets(query)), shareReplay(1));
    this.loading$ = merge(startSearch.pipe(mapTo(true)), this.rockets$.pipe(mapTo(false)));
  }

  search(query: string) {
    this.search$.next(query);
  }
}
