import { Action } from '@ngrx/store';
import { Rocket } from '../rockets/models/rocket.model';

export enum RocketsActionTypes {
  RocketsLoaded = '[Rockets] rockets loaded',
  SearchQueryUpdated = '[Rockets] searchQuery'
}

export class RocketsLoaded implements Action {
  readonly type = RocketsActionTypes.RocketsLoaded;
  constructor(public payload: Rocket[]) {}
}

export class SearchQueryUpdated implements Action {
  readonly type = RocketsActionTypes.SearchQueryUpdated;
  constructor(public payload: string) {}
}

export type RocketsAction =
  | RocketsLoaded
  | SearchQueryUpdated;

export const fromRocketsActions = {
  RocketsLoaded,
  SearchQueryUpdated
};
