import {
  RocketsAction,
  RocketsActionTypes
} from './rockets.actions';
import { Rocket } from '../rockets/models/rocket.model';

export const ROCKETS_FEATURE_KEY = 'Rockets';

export interface RocketsState {
  list: Rocket[];
  searchQuery: string;
}

// needed for effects
// export interface RocketsPartialState {
//   readonly [ROCKETS_FEATURE_KEY]: RocketsState;
// }

export const initialState: RocketsState = {
  list: [],
  searchQuery: ''
};

export function rocketsReducer(
  state: RocketsState = initialState,
  action: RocketsAction
): RocketsState {
  switch (action.type) {
    case RocketsActionTypes.RocketsLoaded: {
      state = {
        ...state,
        list: action.payload
      };
      break;
    }
    case RocketsActionTypes.SearchQueryUpdated: {
      state = {
        ...state,
        searchQuery: action.payload
      };
      break;
    }
  }
  return state;
}
