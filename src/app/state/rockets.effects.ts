import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { RocketsService } from '../rockets/services/rockets.service';
import { RocketsActionTypes, GetRocket, RocketsLoaded } from './rockets.actions';
import { map, switchMap, first, combineLatest, filter, tap } from 'rxjs/operators';
import { Rocket } from '../rockets/models/rocket.model';
import { Store } from '@ngrx/store';
import { rocketsQuery } from './rockets.selectors';

@Injectable()
export class RocketsEffects {

  @Effect()
  public getRocketFromServer$ = this.actions$.pipe(
    ofType(RocketsActionTypes.GetRocket),
    combineLatest(
      this.actions$.pipe(
        ofType(RocketsActionTypes.GetRocket),
        first(),
        switchMap((action: GetRocket) => this.store.select(rocketsQuery.getRocket(action.payload)))
      )
    ),
    filter(([action, rocket]) => !rocket),
    map(([action, rocket]) => action),
    switchMap((action: GetRocket) => this.rocketsService.getRocket(action.payload * 1) ),
    map((rocket: Rocket) => new RocketsLoaded([rocket]))
  );

  constructor(
    private actions$: Actions,
    private rocketsService: RocketsService,
    private store: Store<any>
  ) {}
}
