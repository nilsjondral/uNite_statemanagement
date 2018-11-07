import { Action } from '@ngrx/store';
import { Rocket } from '../rockets/models/rocket.model';

export enum RocketsActionTypes {
  RocketsLoaded = '[Rockets] rockets loaded',
  SearchQueryUpdated = '[Rockets] searchQuery',
  SetRocketVisited = '[Rockets] set rocket visited',
  GetRocket = '[Rockets] get rocket'
}

export class RocketsLoaded implements Action {
  readonly type = RocketsActionTypes.RocketsLoaded;
  constructor(public payload: Rocket[]) {}
}

export class SearchQueryUpdated implements Action {
  readonly type = RocketsActionTypes.SearchQueryUpdated;
  constructor(public payload: string) {}
}

export class SetRocketVisited implements Action {
  readonly type = RocketsActionTypes.SetRocketVisited;
  constructor(public payload: number) {}
}

export class GetRocket implements Action {
  readonly type = RocketsActionTypes.GetRocket;
  constructor(public payload: number) {}
}

export type RocketsAction =
  | RocketsLoaded
  | SearchQueryUpdated
  | SetRocketVisited
  | GetRocket;

export const fromRocketsActions = {
  RocketsLoaded,
  SearchQueryUpdated,
  SetRocketVisited,
  GetRocket
};
