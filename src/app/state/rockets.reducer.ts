import {
  RocketsAction,
  RocketsActionTypes
} from './rockets.actions';
import { Rocket } from '../rockets/models/rocket.model';

export const ROCKETS_FEATURE_KEY = 'Rockets';

export interface RocketsState {
  list: Rocket[];
  searchQuery: string;
  loading: boolean;
}

export interface RocketsPartialState {
  readonly [ROCKETS_FEATURE_KEY]: RocketsState;
}

export const initialState: RocketsState = {
  list: [],
  searchQuery: '',
  loading: false
};

export function rocketsReducer(
  state: RocketsState = initialState,
  action: RocketsAction
): RocketsState {
  switch (action.type) {
    case RocketsActionTypes.RocketsLoaded: {
      state = {
        ...state,
        list: action.payload,
        loading: false
      };
      break;
    }
    case RocketsActionTypes.SearchQueryUpdated: {
      state = {
        ...state,
        searchQuery: action.payload,
        loading: true
      };
      break;
    }
    case RocketsActionTypes.SetRocketVisited: {
      state = {...state };
      const rocket = state.list.find(r => r.id === action.payload);
      rocket.visited = true;
      break;
    }
  }
  return state;
}
