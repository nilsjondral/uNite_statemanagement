import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ROCKETS_FEATURE_KEY,
  RocketsState
} from './rockets.reducer';
import { Rocket } from '../rockets/models/rocket.model';

// Lookup the 'Rockets' feature state managed by NgRx
const getRocketsState = createFeatureSelector<RocketsState>(
  ROCKETS_FEATURE_KEY
);

const getRockets = createSelector(
  getRocketsState,
  (state: RocketsState) => state.list
);

const getRocket = (id: number) => createSelector(
  getRocketsState,
  getRockets,
  (state: RocketsState, rockets: Rocket[]) => {
    return rockets.find(r => r.id === id);
  }
);

const getQuery = createSelector(
  getRocketsState,
  (state: RocketsState) => state.searchQuery
);

const getLoading = createSelector(
  getRocketsState,
  (state: RocketsState) => state.loading
);

export const rocketsQuery = {
  getRockets,
  getQuery,
  getLoading,
  getRocket
};
